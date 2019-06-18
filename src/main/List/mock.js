import Mock from 'mockjs' // 引入mockjs
 
const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据
let list = []
for(let i=0;i<20;i++) list.push(i)
const searchCategory = {
    code: 200,
    data: {
    	page:1,
    	pageSize: 20,
        list
    },
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


Mock.mock('api/search/category', 'get', searchCategory) // 根据数据模板生成模拟数据



