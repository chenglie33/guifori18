var walk = require("walk");
var fs = require("fs");
var path = require("path");
var vueI18n = require("./vueloaderfile");
var babelI18n = require("./babylontest");
var roots = path.join(__dirname);
var root = "/Users/chenlei/WebstormProjects/igen";
var files = [],
  dirs = [];
let allKey = [];

getFileList(path.join(root));

function getFileList(path) {
  var walker = walk.walk(path, {
    followLinks: false,
    filters: [
      "node_modules",
      "nginxServerConf",
      "build",
      "config",
      "test",
      "static"
    ]
  });

  walker.on("file", function(roots, stat, next) {
    // files.push(roots + "/" + stat.name);
    let regVue = /\.vue$/;
    let regJs = /\.js$/;
    if (regVue.test(stat.name)) {
      let VueArr = vueI18n(roots + "/" + stat.name, stat.name);
      allKey = allKey.concat(VueArr);
      // console.log(VueArr);
    } else if (regJs.test(stat.name)) {
      let JsArr = babelI18n(roots + "/" + stat.name, stat.name);
      allKey = allKey.concat(JsArr);
      // console.log(JsArr);
    }
    // console.log(allKey);
    next();
  });

  walker.on("directory", function(roots, stat, next) {
    // dirs.push(roots + "/" + stat.name);
    next();
  });
  walker.on("end", function() {
    let key = outreapeat(allKey);
    fs.writeFileSync(
      `${roots}/fileout.js`,
      JSON.stringify(key, null, 2),
      "utf8"
    );
    // console.log("files " + files);
    // console.log("dirs " + dirs);
  });
}
function outreapeat(arr) {
  var newArr = []; //定义一个新数组来接收元素

  for (var i = 0; i < arr.length; i++) {
    //判断newArr中是否有arr[i]这个元素，如果返回结果为-1（<0）证明新数组newArr中没有这个元素，则把元素添加到新数组中
    if (newArr.indexOf(arr[i]) < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
