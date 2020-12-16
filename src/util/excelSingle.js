const XLSX = require("xlsx-style");
var fs = require("fs");

class OutExcel {
  constructor(startRow, endRow, filePath) {
    this.endRow = endRow;
    this.startRow = startRow;
    this.arrForkey = []; // 数组比对其 负责第二层数据的比对工作
    this.outJson = [];
    this.workbook = XLSX.readFile(filePath);
    this.SheetsName = this.workbook.SheetNames[0];
    this.worksheet = this.workbook.Sheets[this.SheetsName];
    this.cellName_orderName = 'A' // 指令的中文名
    this.cellName_orderType = 'B' // 指令类型
    this.cellName_inputType = 'C' // 交互方式 
    this.cellName_orderArea = 'D' // 范围
    this.cellName_unit = 'E' // 单位
    this.cellName_float = 'F' // 浮点数
    this.cellname_code = 'G' // code
    this.cellname_format = 'H' // 特殊格式
    this.cellname_i18 = 'I' // 国际化key
    this.cellname_i18read = 'J' // 读取国际化key
    this.cellname_i18set = 'K' // 设置国际化key
  }
  // 获取当前列的所有数据 前期的数据组装
  fName(currentCell, translateCell, codeCell) {
    for (let i = this.startRow; i <= this.endRow; i++) {
      let cell_orderType = this.worksheet[currentCell + i].v;
      cell_orderType.split('/').forEach(item => {
        if (item.trim() === '读取') {
          let analysis =this.analysisFun(i)
          this.outJson.push({
            code: `r_${this.worksheet[this.cellname_code + i].v}`,
            name: [this.worksheet[this.cellname_i18read + i].v,'读取'+this.worksheet[this.cellName_orderName + i].v],
            ipt: [],
            analysis
          })
        } else {
          let [ipt, analysis] = this.setIptAnalysis(i)
          this.outJson.push({
            code: `s_${this.worksheet[this.cellname_code + i].v}`,
            name: [this.worksheet[this.cellname_i18set + i].v,'设置'+this.worksheet[this.cellName_orderName + i].v],
            ipt,
            analysis
            
          })
        }
      })
    }
    console.log(JSON.stringify(this.outJson))
  }
  // 读取模式下的analysis解析
  analysisFun (i) {
    let analysis = []
    if (this.worksheet[this.cellName_inputType + i].v.trim() === '输入框') {
      analysis = [{
        name: [this.worksheet[this.cellname_i18 + i].v,this.worksheet[this.cellName_orderName + i].v],
        type: 'input',
        unit: [this.worksheet[this.cellName_unit + i].v.trim(),this.worksheet[this.cellName_unit + i].v.trim()]
      }]
    } else if (this.worksheet[this.cellName_inputType + i].v.trim() === '时间') {
      analysis = [{
        name: [this.worksheet[this.cellname_i18 + i].v,this.worksheet[this.cellName_orderName + i].v],
        type: 'time',
        format: this.worksheet[this.cellname_format + i].v,
        unit: [this.worksheet[this.cellName_unit + i].v.trim(),this.worksheet[this.cellName_unit + i].v.trim()]
      }]
    } else if (this.worksheet[this.cellName_inputType + i].v.trim() === '选项框') {
      analysis = [{
        name: [this.worksheet[this.cellname_i18 + i].v,this.worksheet[this.cellName_orderName + i].v],
        type: 'select',
        list: this.listAnalsis(i)
      }]
    }
    return analysis
  }

  // 下拉框List设置
  listAnalsis (i) {
    let list = []
    let listStr = this.worksheet[this.cellName_orderArea + i].v
    listStr.split('||'). forEach(item => {
      let dataArr = item.split(':')
      list.push({value:dataArr[0], text: [dataArr[1], dataArr[1]]})
    })
    return list
  }
  // 设置MatchType和only
  matchTypeOnly (i,placeholder) {
    let matchType = ''
    let only = ''
    let isLowZero = placeholder.indexOf('-') > -1 ? true : false
    let float_len = this.worksheet[this.cellName_float + i].v
    console.log(float_len)
    switch (float_len) {
      case 0:   
        if (isLowZero) {
          matchType = 'int'
          only = 'int'
        } else {
          matchType = 'absInt'
          only = 'absInt'
        }
        break
      case 1:
        matchType = 'floor1x'
        if (isLowZero) only = 'number'
        else only = 'absNumber'
        break
      case 2:
        matchType = 'floor2x'
        if (isLowZero) only = 'number'
        else only = 'absNumber'
        break
      case 3:
        matchType = 'floor3x'
        if (isLowZero) only = 'number'
        else only = 'absNumber'
        break
      case 4:
        matchType = 'floor4x'
        if (isLowZero) only = 'number'
        else only = 'absNumber'
        break
    }
    return [matchType, only]
  }
  // 设置模式下的ipt/analysis解析
  setIptAnalysis (i) {
    let analysis = []
    let ipt = {}

    if (this.worksheet[this.cellName_inputType + i].v.trim() === '输入框') {
      let [placeholder, inputTips, verification, areas] = this.Areaplaceholder(i)
      let [matchType, only] = this.matchTypeOnly(i,placeholder)
      ipt = {
        type: 'input',
        value: '',
        name: [this.worksheet[this.cellname_i18 + i].v,this.worksheet[this.cellName_orderName + i].v],
        input: {
          unit: [this.worksheet[this.cellName_unit + i].v.trim(),this.worksheet[this.cellName_unit + i].v.trim()],
          placeholder,
          inputTips,
          inputErr: { isError: { error: false }, errorTip: "" },
          rule: {
            areas,
            verification,
            matchType,
            only
          }
        }
      }
      let analysis =this.analysisFun(i)
    } else if (this.worksheet[this.cellName_inputType + i].v.trim() === '时间') {
      ipt = [
				{
					name: [this.worksheet[this.cellname_i18 + i].v,this.worksheet[this.cellName_orderName + i].v],
					type: "time",
					value: "",
					format: this.worksheet[this.cellname_format + i].v,
					area: this.worksheet[this.cellName_orderArea + i].v,
				}
      ]
      analysis = [
				{
					name: [this.worksheet[this.cellname_i18 + i].v,this.worksheet[this.cellName_orderName + i].v],
					format: this.worksheet[this.cellname_format + i].v,
					type: "time",
					unit: [this.worksheet[this.cellName_unit + i].v.trim(),this.worksheet[this.cellName_unit + i].v.trim()],
				},
			]
    } else if (this.worksheet[this.cellName_inputType + i].v.trim() === '选项框') {
      let select = [{ value: "", text: ["word806", "请选择"], token: true }, ...this.listAnalsis(i)]
      ipt = [
				{
					name: [this.worksheet[this.cellname_i18 + i].v,this.worksheet[this.cellName_orderName + i].v],
					type: "select",
          select,
          ext: ""
				}
      ]
      analysis = [{
        name: [this.worksheet[this.cellname_i18 + i].v,this.worksheet[this.cellName_orderName + i].v],
        type: 'select',
        list: this.listAnalsis(i)
      }]
    }
    
    return [ipt, analysis]
  }
  // 所有的区间值插入
  Areaplaceholder (i) {
    let Area = this.worksheet[this.cellName_orderArea + i].v || ''
    let placeholder = ''
    let inputTips = []
    let verification = ''
    let areas = []
    if (Area.indexOf('U') > -1){
      Area.split('U').forEach(item => {
        let JSONItem = JSON.parse(item)
        let StringItemP = item.replace('[','').replace(']', '') // 保留结尾0
        let StringItemV = StringItemP // 保留结尾0
        areas.push(JSONItem)
        let JSONStringP = StringItemP.replace(',','~') + ','
        placeholder+=JSONStringP
        let JSONStringV = StringItemV.replace(',','~') + '|'
        verification+=verification
      })
      placeholder = placeholder.substring(0, placeholder.length-1)
      verification = 'notEmpty,~:' + verification.substring(0, verification.length-1)
      inputTips = [`word905+:${placeholder}`, `输入规则:${placeholder}`]
    } else if (!Area || Area === '') { 

    } else {
      let JSONItem = JSON.parse(Area)
      let StringItemP = Area.replace('[','').replace(']', '') // 保留结尾0
      let StringItemV = StringItemP // 保留结尾0
      areas.push(JSONItem)
      let JSONStringP = StringItemP.replace(',','~') + ','
      placeholder+=JSONStringP
      let JSONStringV = StringItemV.replace(',','~') + '|'
      verification+=verification
    }
    return [placeholder, inputTips, verification, areas]
  }
  outExcel() {
    // 第一层的name的处理
    this.fName(this.cellName_orderType);
    debugger
  }
}

let outExcel = new OutExcel(38, 38, "C:/Users/IGENUI/Desktop/单个指令模板.xlsx");
outExcel.outExcel();

// {
//   type: "input",
//   value: "",
//   name: ["1153-7", "无功功率补偿（PF）"],
//   input: {
//     unit: ["", ""],
//     placeholder: "-0.999~-0.800,0.800~1",
//     inputTips: ["word905+:-0.999~-0.800,0.800~1", "输入规则:-0.999~-0.800,0.800~1"],
//     inputErr: { isError: { error: false }, errorTip: "" },
//     rule: {
//       matchType: "floor3x",
//       only: "number",
//       areas: [
//         [-0.999, -0.8],
//         [0.8, 1],
//       ],
//       verification: "notEmpty,~:-0.999~-0.800|0.800~1",
//     },
//   },
// }
