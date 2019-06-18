import Mock from 'mockjs' // 引入mockjs
 
 let list = []
 for(let i=0;i<4;i++)list.push(i)
const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据
const homeIndex = {
    code: 200,
    vo: {
    	feeds: {
    		total: 20,
    		list
    	},
        tabs: [{
            "name": "苏宁易购",
            "jumpUrl": "/List.html",
            "imageUrl": "//gw.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_110x10000.jpg_.webp",
            "index": 2
        }, {
            "name": "苏宁易购",
            "jumpUrl": "/List.html",
            "imageUrl": "//gw.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_110x10000.jpg_.webp",
            "index": 3
        }, {
            "name": "苏宁易购",
            "jumpUrl": "/List.html",
            "imageUrl": "//gw.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_110x10000.jpg_.webp",
            "index": 4
        }, {
            "name": "苏宁易购",
            "jumpUrl": "/List.html",
            "imageUrl": "//gw.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_110x10000.jpg_.webp",
            "index": 5
        }],
    	banner: {
    		sourceInfoList: [{
    			cmMark: 1,
    			cmMarkName: "xxx"
    		}, {
    			cmMark: 1,
    			cmMarkName: "xxx"
    		}, {
    			cmMark: 1,
    			cmMarkName: "xxx"
    		}, {
    			cmMark: 1,
    			cmMarkName: "xxx"
    		}],
    		jumpUrls: ["index.html", "index.html", "index.html", "index.html"],
    		imageUrls: [
    		"https://gw.alicdn.com/imgextra/i1/96/O1CN01rIrWWi1Ca0Yf8eLsl_!!96-0-lubanu.jpg_790x10000Q75.jpg_.webp",
    		 "https://gw.alicdn.com/imgextra/i3/11/O1CN01ywivtk1Bx4tTe2scY_!!11-0-lubanu.jpg_790x10000Q75.jpg_.webp",
    		  "https://gw.alicdn.com/imgextra/i2/139/O1CN01xlgJbX1CthaY8ZsKF_!!139-0-lubanu.jpg_790x10000Q75.jpg_.webp",
    		  "x"]
    	}
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


Mock.mock('api/home/index', 'get', homeIndex) // 根据数据模板生成模拟数据



