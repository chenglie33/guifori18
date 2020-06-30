const XLSX = require("xlsx-style");
var fs = require("fs");

let mb = [
  {
    name: ["开机启动参数", "开机启动参数"],
    code: "kjqdcs",
    codeR: "r_kjqdcs",
    codeS: "s_kjqdcs",
    cmdList: [
      {
        name: ["等待并网时间", "等待并网时间"],
        code: "1000",
        type: "input",
        placeholder: ["0~2000", "0~2000"],
        tip: ["", ""],
        errorTip: ["", ""],
        unit: ["S", "S"],
        rule: {
          matchType: "absInt",
          only: "absInt",
          area: [[0, 2000]],
          verification: "notEmpty,~:10~2000",
        },
      },
    ],
  },
];

class OutExcel {
  constructor(startRow, endRow, filePath) {
    this.endRow = endRow;
    this.startRow = startRow;
    this.arrForkey = []; // 数组比对其 负责第二层数据的比对工作
    this.outJson = [];
    this.workbook = XLSX.readFile(filePath);
    this.SheetsName = this.workbook.SheetNames[7];
    this.worksheet = this.workbook.Sheets[this.SheetsName];
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
        this.outJson[indexF].cmdList.push({
          name: [
            `${this.worksheet["F" + itemS].v}`,
            `${this.worksheet["E" + itemS].v}`,
          ],
        });
      });
    });
  }
  outExcel() {
    // 第一层的name的处理
    this.fName("C", "D", "B");

    // 第二层数据的组装
    this.sFill();
    console.log(this.outJson);
  }
}

let outExcel = new OutExcel(2, 52, "C:/Users/IGENUI/Desktop/批量指令规则.xlsx");
outExcel.outExcel();
