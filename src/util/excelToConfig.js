const XLSX = require("xlsx-style");
var fs = require("fs");

class OutExcel {
  constructor(startRow, endRow, filePath) {
    this.endRow = endRow;
    this.startRow = startRow;
    this.arrForkey = []; // 数组比对其 负责第二层数据的比对工作
    this.outJson = [];
    this.workbook = XLSX.readFile(filePath);
    this.SheetsName = this.workbook.SheetNames[7];
    this.worksheet = this.workbook.Sheets[this.SheetsName];
    this.cellName_groupName = "C"; // 指令组名称的列
    this.cellName_groupName_t = "D"; // 指令组名称的列的翻译
    this.cellName_groupName_key = "B"; // 指令组名对应的key
    this.cellName_group_name = "E"; // 组下指令的中文
    this.cellName_group_name_t = "F"; // 组下指令中文的key
    this.cellName_group_code = "I"; // 组下指令中文的key
    this.cellName_group_type = "N"; // 组下指令类型 input 或 select
    this.cellName_group_area = "O"; // 输入框类型下的输入范围
    this.cellName_group_unit = "M"; // 单位
    this.cellName_group_numtype = "L"; // 倍率 判断数字的类型
    this.cellName_group_ifCode = "Q"; // 条件语句判断展示问题
  }
  // 获取当前列的所有数据 前期的数据组装
  fName(currentCell, translateCell, codeCell) {
    for (let i = this.startRow; i <= this.endRow; i++) {
      let cellname = this.worksheet[currentCell + i].v;
      //   console.log(cellname,i)
      if (cellname && cellname.trim() !== "") {
        this.arrForkey.push([i]);
        let spliteCode = this.worksheet[codeCell + i].v.split(",");
        this.outJson.push({
          name: [`${this.worksheet[translateCell + i].v}`, `${cellname}`],
          code: spliteCode[0],
          codeR: spliteCode[1],
          codeS: spliteCode[2],
          cmdList: [],
        });
      } else {
        this.arrForkey[this.arrForkey.length - 1].push(i);
      }
    }
  }
  // 第二层数据的组装
  sFill() {
    this.arrForkey.forEach((itemF, indexF) => {
      itemF.forEach((itemS, indexS) => {
        let childItem = {
          name: [
            `${this.worksheet[this.cellName_group_name_t + itemS].v}`,
            `${this.worksheet[this.cellName_group_name + itemS].v}`,
          ],
          code: `${this.worksheet[this.cellName_group_code + itemS].v.substring(
            2,
            this.worksheet[this.cellName_group_code + itemS].v.length
          )}`,
          tip: ["", ""],
          errorTip: ["", ""],
        };
        switch (this.worksheet[this.cellName_group_type + itemS].v) {
          case "输入框":
            childItem.type = "input";
            childItem.placeholder = [
              `${this.worksheet[this.cellName_group_area + itemS].v}`,
              `${this.worksheet[this.cellName_group_area + itemS].v}`,
            ];
            childItem.rule = {};
            childItem.rule.area = [
              [
                `${
                  this.worksheet[this.cellName_group_area + itemS].v.split(
                    "~"
                  )[0]
                }`,
                `${
                  this.worksheet[this.cellName_group_area + itemS].v.split(
                    "~"
                  )[1]
                }`,
              ],
            ];
            var fNumber = this.worksheet[this.cellName_group_area + itemS].v.split("~")[0];
            var numtype;

            // 判断但是输入框的matchType以及only
            var beilv = this.worksheet[this.cellName_group_numtype + itemS].v.toString()
            if (beilv === "1" && fNumber >= 0) {
              childItem.rule.matchType = "absInt";
              childItem.rule.only = "absInt";
            } else if (beilv === "1" && fNumber < 0) {
              childItem.rule.matchType = "int";
              childItem.rule.only = "int";
            }
            if (beilv === "0.1" && fNumber >= 0) {
              childItem.rule.matchType = "floor1x";
              childItem.rule.only = "absNumber";
            } else if (beilv === "0.1" && fNumber < 0) {
              childItem.rule.matchType = "floor1x";
              childItem.rule.only = "number";
            }
            if (beilv === "0.01" && fNumber >= 0) {
              childItem.rule.matchType = "floor2x";
              childItem.rule.only = "absNumber";
            } else if (beilv === "0.01" && fNumber < 0) {
              childItem.rule.matchType = "floor2x";
              childItem.rule.only = "number";
            }
            childItem.rule.verification =
              `notEmpty,~:` +
              `${this.worksheet[this.cellName_group_area + itemS].v}`;
         
            childItem.tip = ["", ""];
            childItem.errorTip = ["", ""];
            childItem.unit = [
              `${this.worksheet[this.cellName_group_unit + itemS].v}`,
              `${this.worksheet[this.cellName_group_unit + itemS].v}`,
            ];
            break;
          case "选项框":
            childItem.type = "select";
            childItem.list = [{"value":"","text":["word806","请选择"],"token":true}];
            var selectValue = this.worksheet[this.cellName_group_area + itemS].v;
            var slectarr = selectValue.split("&&");
            slectarr.forEach(item => {
              var childItems = item.split(",")
              // console.log(childItems)
              childItem.list.push({
                "value":childItems[2],
                "text":[childItems[1],childItems[0]]
              })
              
            })
            break;
        }
        
        let ifcode = this.worksheet[this.cellName_group_ifCode + itemS].v
        if (ifcode && ifcode.trim().length>0) {
          childItem.specialProcess = {
            targetCodeValue: ifcode,
            "action":"show"
          }
        }
        this.outJson[indexF].cmdList.push(childItem);
      });
    });
  }
  outExcel() {
    // 第一层的name的处理
    this.fName(
      this.cellName_groupName,
      this.cellName_groupName_t,
      this.cellName_groupName_key
    );

    // 第二层数据的组装
    this.sFill();
    console.log(JSON.stringify(this.outJson));
    debugger;
  }
}

let outExcel = new OutExcel(2, 52, "C:/Users/IGENUI/Desktop/批量指令规则.xlsx");
outExcel.outExcel();
