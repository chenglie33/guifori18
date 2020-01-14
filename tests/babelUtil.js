let babel = require("@babel/core"); //babel核心库
let types = require("babel-types");

const parse = require("@babel/parser");
const generate = require("@babel/generator");
const traverse = require("@babel/traverse");
var fs = require("fs");

function transerI18n(code, filename) {
  //   const code = fs.readFileSync(path);
  let arr = [];
  let visitor = {
    // leadingComments(path) {
    //   arr.concat(regx(path.node.value.toString()));
    // },
    CallExpression(path) {
      if (
        path.node.callee.name === "getLanguageStr" ||
        path.node.callee.name === "$t"
      ) {
        // console.log(path.node.arguments[0].value);
        arr.push(path.node.arguments[0].value);
      }
    },
    MemberExpression(path) {
      // if (path.node.property.name === 'get') {
      //   console.log(path.node.object)
      // }
      if (
        path.node.property.name === "t" &&
        (types.isIdentifier(path.node.object, { name: "i18n" }) ||
          (types.isMemberExpression(path.node.object) &&
            path.node.object.property.name === "i18n"))
      ) {
        var parpath = path.findParent(path => {
          if (path.isCallExpression() && path.node.callee) {
            return true;
          } else {
            return false;
          }
        });
        arr.push(parpath.node.arguments[0].value);
      }
    }
  };

  let arrayPlugin = { visitor };

  let result = babel.transform(code.toString(), {
    filename,
    plugins: [arrayPlugin]
  });
  let astcode = parse.parse(code.toString(), {
    // parse in strict mode and allow module declarations
    sourceType: "module",

    plugins: [
      // enable jsx and flow syntax
      "jsx",
      "flow"
    ]
  });
  //   console.log(astcode);
  astcode.comments.map(item => {
    arr.concat(regx(item.value.toString()));
  });
  //   console.log(arr);
  return arr;
}
module.exports = transerI18n;

// let strungs = `$t('12','222');aaa $t('1111')`;
// // let reg = /(?<=\()[^\(\)]*(?=\))/g;
// // console.log(reg.exec(strungs));
function regx(code) {
  const regs = /(?<=[\$t|getLanguageStr|i18n.t]\(['|"])[\S\s]+?(?=['|"])/g;
  return code.match(regs);
}
const str =
  "$t('abc','222'); aaa; getLanguageStr(\"abcd\");i18n.t('12312','i18n')";
const regs = /(?<=[\$t|getLanguageStr|i18n.t]\(['|"])[\S\s]+?(?=['|"])/g;

// console.log(str.match(regs));
