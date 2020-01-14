let babel = require("@babel/core"); //babel核心库
let types = require("babel-types");
let transerI18n = require("./babelUtil");
const parse = require("@babel/parser");
const generate = require("@babel/generator");
const traverse = require("@babel/traverse");
var fs = require("fs");

// const code = `function square(n) {
//   return n * n;
// }`;
function babelI18n(path, filename) {
  const code = fs.readFileSync(
    // "/Users/chenlei/WebstormProjects/igen/src/util/lib.js"
    path
  );
  // let code = `codes.map(code=>{return code.toUpperCase()})`;//转换语句
  return transerI18n(code, filename);
  // let visitor = {
  //   CallExpression(path) {
  //     // console.log(path.node.arguments[0].value);
  //     if (path.node.callee.name === "getLanguageStr") {
  //       console.log(path.node.arguments[0].value);
  //     }
  //     // traverse(path);
  //   }
  //   // ArrowFunctionExpression(path) {//定义需要转换的节点
  //   //     let params = path.node.params
  //   //     let blockStatement = path.node.body
  //   //     // console.log(params, blockStatement)
  //   //     let func = types.functionExpression(null, params, blockStatement, false, false)
  //   //     path.replaceWith(func) //
  //   // }
  // };

  // let arrayPlugin = { visitor };

  // let result = babel.transform(code.toString(), {
  //   filename: "1.js",
  //   plugins: [arrayPlugin]
  // });
}
module.exports = babelI18n;
// const a = 'var a = 1;';
// const b = 'var b = 2;';
// const astA = parse.parse(a, { sourceFilename: 'a.js' });
// const astB = parse.parse(b, { sourceFilename: 'b.js' });
// const ast = {
//     type: 'Program',
//     body: [].concat(astA.program.body, astB.program.body)
//   };
//   const { codes, map } = generate.default(ast, { sourceMaps: true }, {
//     'a.js': a,
//     'b.js': b
//   });
//   console.log(codes)

//   const codess = `function square(n) {
//     return n * n;
//   }`;
//   const asts = parse.parse(codess);

// traverse.default(asts, {
//     FunctionDeclaration: function(path) {
//         path.node.id.name = "x";
//     }
// });
// var x = generate.default(asts,{})
// console.log(x)
