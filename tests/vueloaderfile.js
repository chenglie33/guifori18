const compiler = require("vue-template-compiler");
let babel = require("@babel/core"); //babel核心库
let types = require("babel-types");
let transerI18n = require("./babelUtil");
const parse = require("@babel/parser");
const generate = require("@babel/generator");
const traverse = require("@babel/traverse");
var fs = require("fs");

function vueI18n(path, filename) {
  let arr = [];
  const code = fs.readFileSync(
    // "/Users/chenlei/WebstormProjects/igen/src/view/device/firmware/part/Detail.vue"
    path
  );

  const vueObejct = compiler.compile(code.toString());
  let outcode = vueObejct.render
    .toString()
    .replace("with(this)", "function a()");
  //   console.log(outcode);
  let vueTemp = transerI18n(outcode, filename);
  //   console.log(vueTemp);
  const sfc = compiler.parseComponent(code.toString());
  // console.log(sfc.script.content);
  let scriptarr = transerI18n(sfc.script.content, filename);
  arr.concat(scriptarr, vueTemp);
  //   console.log(arr);
  return arr;
}
module.exports = vueI18n;
// vueI18n(
//   "/Users/chenlei/WebstormProjects/igen/src/view/device/batchTask/part/DList.vue",
//   "ss"
// );
