import Axios from 'axios'
import QS from 'qs';

const axios = Axios.create({
	timeout: 5000
})

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });



function get(url, config) {
    return new Promise((resolve, reject) =>{        
        axios.get(url, config)    
        .then(res => {

            resolve(res.data);        
        })        
        .catch(err => {            
            reject(err.data)        
        })    
    });

}

   function post(url, data, config){
    return new Promise((resolve, reject) => {         
        axios.post(url, data, QS.stringify(data), config)        
        .then(res => {            
            resolve(res.data);        
        })        
        .catch(err => {            
            reject(err.data)        
        })    
    });
  }

export {
	get,
	post
}
