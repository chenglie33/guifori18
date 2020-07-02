[
    {
	"name": ["control1", "开机启动参数 Inverter boot parameters（Read Write） 16个字一起读和写"],
	"code": "kjqdcs",
	"codeR": "r_kjqdcs",
	"codeS": "s_kjqdcs",
	"cmdList": [{
		"name": ["Wait for grid connected time", "等待并网时间"],
		"code": "1000",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~1000", "0~1000"],
		"rule": {
			"area": [
				["0", "1000"]
			],
			"matchType": "absInt",
			"only": "absInt",
			"verification": "notEmpty,~:0~1000"
		},
		"unit": ["S", "S"]
	}, {
		"name": ["Raise speed", "并网功率上升速率"],
		"code": "1001",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~3000", "0~3000"],
		"rule": {
			"area": [
				["0", "3000"]
			],
			"matchType": "absInt",
			"only": "absInt",
			"verification": "notEmpty,~:0~3000"
		},
		"unit": ["%", "%"]
	}, {
		"name": ["Reconnect time after fault", "电网故障恢复后等待并网时间"],
		"code": "1002",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~1000", "0~1000"],
		"rule": {
			"area": [
				["0", "1000"]
			],
			"matchType": "absInt",
			"only": "absInt",
			"verification": "notEmpty,~:0~1000"
		},
		"unit": ["S", "S"]
	}, {
		"name": ["Raise speed after fault", "电网故障恢复后功率上升速率"],
		"code": "1003",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~3000", "0~3000"],
		"rule": {
			"area": [
				["0", "3000"]
			],
			"matchType": "absInt",
			"only": "absInt",
			"verification": "notEmpty,~:0~3000"
		},
		"unit": ["%", "%"]
	}, {
		"name": ["Over voltage protection before start", "并网前电网过压保护值"],
		"code": "1004",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~450", "0~450"],
		"rule": {
			"area": [
				["0", "450"]
			],
			"matchType": "floor1x",
			"only": "absNumber",
			"verification": "notEmpty,~:0~450"
		},
		"unit": ["V", "V"]
	}, {
		"name": ["Under voltage protection before start", "并网前电网欠压保护值"],
		"code": "1005",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~450", "0~450"],
		"rule": {
			"area": [
				["0", "450"]
			],
			"matchType": "floor1x",
			"only": "absNumber",
			"verification": "notEmpty,~:0~450"
		},
		"unit": ["V", "V"]
	}, {
		"name": ["Over frequency protection before start", "并网前电网过频保护值"],
		"code": "1006",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["40~70", "40~70"],
		"rule": {
			"area": [
				["40", "70"]
			],
			"matchType": "floor2x",
			"only": "absNumber",
			"verification": "notEmpty,~:40~70"
		},
		"unit": ["Hz", "Hz"]
	}, {
		"name": ["Under frequency protection before start", "并网前电网欠频保护值"],
		"code": "1007",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["40~70", "40~70"],
		"rule": {
			"area": [
				["40", "70"]
			],
			"matchType": "floor2x",
			"only": "absNumber",
			"verification": "notEmpty,~:40~70"
		},
		"unit": ["Hz", "Hz"]
	}, {
		"name": ["Overvoltage protection before grid-connection after fault", "故障恢复后并网前过压保护值"],
		"code": "1008",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~450", "0~450"],
		"rule": {
			"area": [
				["0", "450"]
			],
			"matchType": "floor1x",
			"only": "absNumber",
			"verification": "notEmpty,~:0~450"
		},
		"unit": ["V", "V"]
	}, {
		"name": ["Protection value of undervoltage before grid connection after fault", "故障恢复后并网前电网欠压保护值"],
		"code": "1009",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~450", "0~450"],
		"rule": {
			"area": [
				["0", "450"]
			],
			"matchType": "floor1x",
			"only": "absNumber",
			"verification": "notEmpty,~:0~450"
		},
		"unit": ["V", "V"]
	}, {
		"name": ["Overfrequency protection value of power grid before grid-connection after fault", "故障恢复后并网前电网过频保护值"],
		"code": "100A",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["40~70", "40~70"],
		"rule": {
			"area": [
				["40", "70"]
			],
			"matchType": "floor2x",
			"only": "absNumber",
			"verification": "notEmpty,~:40~70"
		},
		"unit": ["Hz", "Hz"]
	}, {
		"name": ["Underfrequency protection value of grid before grid-connection after fault", "故障恢复后并网前电网欠频保护值"],
		"code": "100B",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["40~70", "40~70"],
		"rule": {
			"area": [
				["40", "70"]
			],
			"matchType": "floor2x",
			"only": "absNumber",
			"verification": "notEmpty,~:40~70"
		},
		"unit": ["Hz", "Hz"]
	}]
}, {
	"name": ["control2", "电压保护参数 InverterVoltageProtection（Read Write）16个字一起读和写"],
	"code": "dybhcs",
	"codeR": "r_dybhcs",
	"codeS": "s_dybhcs",
	"cmdList": [{
		"name": ["Grid voltage protection Enable/Disable", "电压保护使能"],
		"code": "1010",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "select",
		"list": [{
			"value": "",
			"text": ["word806", "请选择"],
			"token": true
		}, {
			"value": "11111000",
			"text": ["shineng", "使能"]
		}, {
			"value": "00000000",
			"text": ["jingzhi", "禁止"]
		}]
	}, {
		"name": ["Grid over voltage protection level1", "一级过压保护值"],
		"code": "1011",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["10~300", "10~300"],
		"rule": {
			"area": [
				["10", "300"]
			],
			"matchType": "floor1x",
			"only": "absNumber",
			"verification": "notEmpty,~:10~300"
		},
		"unit": ["V", "V"]
	}, {
		"name": ["Delay time of Grid over-volt protection level1", "一级过压保护时间"],
		"code": "1012",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~200000", "0~200000"],
		"rule": {
			"area": [
				["0", "200000"]
			],
			"verification": "notEmpty,~:0~200000"
		},
		"unit": ["ms", "ms"]
	}, {
		"name": ["Grid over voltage protection level2", "二级过压保护值"],
		"code": "1013",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["10~300", "10~300"],
		"rule": {
			"area": [
				["10", "300"]
			],
			"matchType": "floor1x",
			"only": "absNumber",
			"verification": "notEmpty,~:10~300"
		},
		"unit": ["V", "V"]
	}, {
		"name": ["Delay time of Grid over-volt protection level2", "二级过保护时间"],
		"code": "1014",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~200000", "0~200000"],
		"rule": {
			"area": [
				["0", "200000"]
			],
			"verification": "notEmpty,~:0~200000"
		},
		"unit": ["ms", "ms"]
	}, {
		"name": ["Grid under voltage protection level1", "一级欠压保护值"],
		"code": "1015",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["10~300", "10~300"],
		"rule": {
			"area": [
				["10", "300"]
			],
			"matchType": "floor1x",
			"only": "absNumber",
			"verification": "notEmpty,~:10~300"
		},
		"unit": ["V", "V"]
	}, {
		"name": ["Delay time of Grid under-volt protection level1", "一级欠压保护时间"],
		"code": "1016",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~200000", "0~200000"],
		"rule": {
			"area": [
				["0", "200000"]
			],
			"verification": "notEmpty,~:0~200000"
		},
		"unit": ["ms", "ms"]
	}, {
		"name": ["Grid under voltage protection level2", "二级欠压保护值"],
		"code": "1017",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["10~300", "10~300"],
		"rule": {
			"area": [
				["10", "300"]
			],
			"matchType": "floor1x",
			"only": "absNumber",
			"verification": "notEmpty,~:10~300"
		},
		"unit": ["V", "V"]
	}, {
		"name": ["Delay time of Grid under-volt protection level2", "二级欠压保护时间"],
		"code": "1018",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~200000", "0~200000"],
		"rule": {
			"area": [
				["0", "200000"]
			],
			"verification": "notEmpty,~:0~200000"
		},
		"unit": ["ms", "ms"]
	}, {
		"name": ["Grid over voltage protection in 10mins", "10分钟过压保护值"],
		"code": "1019",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["10~300", "10~300"],
		"rule": {
			"area": [
				["10", "300"]
			],
			"matchType": "floor1x",
			"only": "absNumber",
			"verification": "notEmpty,~:10~300"
		},
		"unit": ["V", "V"]
	}]
}, {
	"name": ["control3", "频率保护参数 InverterFrequencyProtection（Read Write）16个字一起读和写"],
	"code": "plbhcs",
	"codeR": "r_plbhcs",
	"codeS": "s_plbhcs",
	"cmdList": [{
		"name": ["Grid frequency protection Enable/Disable", "频率保护使能"],
		"code": "1020",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "select",
		"list": [{
			"value": "",
			"text": ["word806", "请选择"],
			"token": true
		}, {
			"value": "11111000",
			"text": ["shineng", "使能"]
		}, {
			"value": "00000000",
			"text": ["jingzhi", "禁止"]
		}]
	}, {
		"name": ["Grid over frequency protection level1", "一级过频保护值"],
		"code": "1021",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["50~55", "50~55"],
		"rule": {
			"area": [
				["50", "55"]
			],
			"matchType": "floor2x",
			"only": "absNumber",
			"verification": "notEmpty,~:50~55"
		},
		"unit": ["Hz", "Hz"]
	}, {
		"name": ["Delay time of Grid over-freq protection level1", "一级过频保护时间"],
		"code": "1022",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~65536", "0~65536"],
		"rule": {
			"area": [
				["0", "65536"]
			],
			"verification": "notEmpty,~:0~65536"
		},
		"unit": ["ms", "ms"]
	}, {
		"name": ["Grid over frequency protection level2", "二级过频保护值"],
		"code": "1023",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["50~55", "50~55"],
		"rule": {
			"area": [
				["50", "55"]
			],
			"matchType": "floor2x",
			"only": "absNumber",
			"verification": "notEmpty,~:50~55"
		},
		"unit": ["Hz", "Hz"]
	}, {
		"name": ["Delay time of Grid over-freq protection level2", "二级过频保护时间"],
		"code": "1024",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~65536", "0~65536"],
		"rule": {
			"area": [
				["0", "65536"]
			],
			"verification": "notEmpty,~:0~65536"
		},
		"unit": ["ms", "ms"]
	}, {
		"name": ["Grid under frequency protection level1", "一级欠频保护值"],
		"code": "1025",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["45~55", "45~55"],
		"rule": {
			"area": [
				["45", "55"]
			],
			"matchType": "floor2x",
			"only": "absNumber",
			"verification": "notEmpty,~:45~55"
		},
		"unit": ["Hz", "Hz"]
	}, {
		"name": ["Delay time of Grid under-freq protection level1", "一级欠频保护时间"],
		"code": "1026",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~65536", "0~65536"],
		"rule": {
			"area": [
				["0", "65536"]
			],
			"verification": "notEmpty,~:0~65536"
		},
		"unit": ["ms", "ms"]
	}, {
		"name": ["Grid under frequency protection level2", "二级欠频保护值"],
		"code": "1027",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["45~55", "45~55"],
		"rule": {
			"area": [
				["45", "55"]
			],
			"matchType": "floor2x",
			"only": "absNumber",
			"verification": "notEmpty,~:45~55"
		},
		"unit": ["Hz", "Hz"]
	}, {
		"name": ["Delay time of Grid under-freq protection level2", "二级欠频保护时间"],
		"code": "1028",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~65536", "0~65536"],
		"rule": {
			"area": [
				["0", "65536"]
			],
			"verification": "notEmpty,~:0~65536"
		},
		"unit": ["ms", "ms"]
	}]
}, {
	"name": ["control4", "远程开关机&有功降载  ON-OFF Enable & Active load reduction 16个字一起读和写"],
	"code": "kgjjz",
	"codeR": "r_kgjjz",
	"codeS": "s_kgjjz",
	"cmdList": [{
		"name": ["Active and remote ON-OFF Enable/Disable", "有功及远程开关机使能"],
		"code": "1040",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "select",
		"list": [{
			"value": "",
			"text": ["word806", "请选择"],
			"token": true
		}, {
			"value": "11111000",
			"text": ["shineng", "使能"]
		}, {
			"value": "00000000",
			"text": ["jingzhi", "禁止"]
		}]
	}, {
		"name": ["Percentage of active output", "有功输出百分比"],
		"code": "1041",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~1000", "0~1000"],
		"rule": {
			"area": [
				["0", "1000"]
			],
			"matchType": "floor1x",
			"only": "absNumber",
			"verification": "notEmpty,~:0~1000"
		},
		"unit": ["%", "%"]
	}, {
		"name": ["ON-OFF Enable", "远程开关机"],
		"code": "1042",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "select",
		"list": [{
			"value": "",
			"text": ["word806", "请选择"],
			"token": true
		}, {
			"value": "11111000",
			"text": ["shineng", "使能"]
		}, {
			"value": "00000000",
			"text": ["jingzhi", "禁止"]
		}]
	}, {
		"name": ["Grid voltage drop starting point voltage", "电网电压降载起始点电压"],
		"code": "1043",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~450", "0~450"],
		"rule": {
			"area": [
				["0", "450"]
			],
			"matchType": "floor1x",
			"only": "absNumber",
			"verification": "notEmpty,~:0~450"
		},
		"unit": ["V", "V"]
	}, {
		"name": ["Grid voltage drop termination point voltage", "电网电压降载终止点电压"],
		"code": "1044",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~450", "0~450"],
		"rule": {
			"area": [
				["0", "450"]
			],
			"matchType": "floor1x",
			"only": "absNumber",
			"verification": "notEmpty,~:0~450"
		},
		"unit": ["V", "V"]
	}, {
		"name": ["Minimum power of grid voltage drop", "电网电压降载最小功率"],
		"code": "1045",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["1~100", "1~100"],
		"rule": {
			"area": [
				["1", "100"]
			],
			"matchType": "absInt",
			"only": "absInt",
			"verification": "notEmpty,~:1~100"
		},
		"unit": ["%", "%"]
	}, {
		"name": ["Overvoltage drop rate", "过压降载速率"],
		"code": "1046",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~300", "0~300"],
		"rule": {
			"area": [
				["0", "300"]
			],
			"matchType": "absInt",
			"only": "absInt",
			"verification": "notEmpty,~:0~300"
		},
		"unit": ["%", "%"]
	}, {
		"name": ["Active load reduction anti reverse load reduction rate", "有功降载防逆流降载速率"],
		"code": "1047",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~300", "0~300"],
		"rule": {
			"area": [
				["0", "300"]
			],
			"matchType": "absInt",
			"only": "absInt",
			"verification": "notEmpty,~:0~300"
		},
		"unit": ["%", "%"]
	}, {
		"name": ["Load shedding rate of logical interface", "逻辑接口降载速率"],
		"code": "1048",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["-1~3000", "-1~3000"],
		"rule": {
			"area": [
				["-1", "3000"]
			],
			"matchType": "int",
			"only": "int",
			"verification": "notEmpty,~:-1~3000"
		},
		"unit": ["%", "%"],
		"specialProcess": {
			"targetCodeValue": "精度1%，-1表示不限制速率",
			"action": "show"
		}
	}, {
		"name": ["Load rate of logical interface", "逻辑接口回载速率"],
		"code": "1049",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["-1~3000", "-1~3000"],
		"rule": {
			"area": [
				["-1", "3000"]
			],
			"matchType": "int",
			"only": "int",
			"verification": "notEmpty,~:-1~3000"
		},
		"unit": ["%", "%"],
		"specialProcess": {
			"targetCodeValue": "精度1%，-1表示不限制速率",
			"action": "show"
		}
	}]
}, {
	"name": ["control5", "绝缘阻抗  Insulation Resisance"],
	"code": "jyzk",
	"codeR": "r_jyzk",
	"codeS": "s_jyzk",
	"cmdList": [{
		"name": ["Anti-islanding Enable/Disable", "孤岛使能"],
		"code": "10A0",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "select",
		"list": [{
			"value": "",
			"text": ["word806", "请选择"],
			"token": true
		}, {
			"value": "11111000",
			"text": ["shineng", "使能"]
		}, {
			"value": "00000000",
			"text": ["jingzhi", "禁止"]
		}]
	}, {
		"name": ["GFCI Enable/Disable", "GFCI使能"],
		"code": "10A1",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "select",
		"list": [{
			"value": "",
			"text": ["word806", "请选择"],
			"token": true
		}, {
			"value": "11111000",
			"text": ["shineng", "使能"]
		}, {
			"value": "00000000",
			"text": ["jingzhi", "禁止"]
		}]
	}, {
		"name": ["Insulation impedance Enable/Disable", "绝缘阻抗使能"],
		"code": "10A2",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "select",
		"list": [{
			"value": "",
			"text": ["word806", "请选择"],
			"token": true
		}, {
			"value": "11111000",
			"text": ["shineng", "使能"]
		}, {
			"value": "00000000",
			"text": ["jingzhi", "禁止"]
		}]
	}, {
		"name": ["PE ground detection Enable/Disable", "PE接地检测使能"],
		"code": "",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "select",
		"list": [{
			"value": "",
			"text": ["word806", "请选择"],
			"token": true
		}, {
			"value": "11111000",
			"text": ["shineng", "使能"]
		}, {
			"value": "00000000",
			"text": ["jingzhi", "禁止"]
		}]
	}, {
		"name": ["Insulation impedance protection value", "绝缘阻抗保护值"],
		"code": "10A3",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~1000", "0~1000"],
		"rule": {
			"area": [
				["0", "1000"]
			],
			"verification": "notEmpty,~:0~1000"
		},
		"unit": ["KΩ", "KΩ"]
	}, {
		"name": ["", "保留"],
		"code": "",
		"tip": ["", ""],
		"errorTip": ["", ""]
	}]
}, {
	"name": ["control6", "其它设置  Other Settings"],
	"code": "qtsz",
	"codeR": "r_qtsz",
	"codeS": "s_jyzk",
	"cmdList": [{
		"name": ["Input Mode", "PV输入模式"],
		"code": "0022",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "select",
		"list": [{
			"value": "",
			"text": ["word806", "请选择"],
			"token": true
		}, {
			"value": "00 ",
			"text": ["binglian", "&#10;并联"]
		}, {
			"value": "01",
			"text": ["chuanlian", " 串联"]
		}]
	}, {
		"name": ["CountryCode", "安规国家"],
		"code": "0027",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "input",
		"placeholder": ["0~200", "0~200"],
		"rule": {
			"area": [
				["0", "200"]
			],
			"verification": "notEmpty,~:0~200"
		},
		"unit": ["", ""]
	}, {
		"name": ["Restore Factory Settings", "恢复出厂设置"],
		"code": "地址0000）",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"type": "select",
		"list": [{
			"value": "",
			"text": ["word806", "请选择"],
			"token": true
		}, {
			"value": "11111000",
			"text": ["shineng", "使能"]
		}, {
			"value": "00000000",
			"text": ["jingzhi", "禁止"]
		}]
	}, {
		"name": ["Offline data retrieval", "离线数据找回"],
		"code": "",
		"tip": ["", ""],
		"errorTip": ["", ""],
		"specialProcess": {
			"targetCodeValue": "场景：采集器与机器通信没有断，但平台上显示了离线，希望可以通过这个来进一步判断",
			"action": "show"
		}
	}]
}]