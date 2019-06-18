import Mock from 'mockjs' // 引入mockjs
 
const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

let vo=[];
for(let i=0; i< 10; i++) {
	vo.push({
		type: null,
		typeName: "XXX",
		categoryHeight: 2,
		categoryLogicVOList: []
	})
}
vo.map((e,t)=> {
	return Object.assign({}, e, {
		index: t + 1
	})
})

let voList = []
for(let i=0; i< 10; i++) {

	voList.push({
		"id": i,
		"name": "XXX",
		"img": "//gw.alicdn.com/tps/TB2HYIerYBmpuFjSZFuXXaG_XXa_!!0-juitemmedia.jpg_140x10000Q75.jpg_.webp",
		"attr": null,
		"url": "",
		"mapType": 0,
		"categoryHeight": 1,
		"categoryLogicVOS": []
	})
}
vo.forEach((e,t)=> {
	vo[t].categoryLogicVOList = voList
})

const homeCategoryList = {
    code: 200,
    "vo": vo,
    "msg": "成功", 
    "status": 1
  
  
}
const logoutInfo = {

    "msg":"成功",
    "status":1
}

const captchaInfo = {

  "msg":"成功",
  "status":1
}


Mock.mock('api/home/category/list', 'get', homeCategoryList) // 根据数据模板生成模拟数据



