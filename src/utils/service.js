import axios from 'axios'
const service = new axios.create({})
service.interceptors.request.use((config)=>{
    console.log(config);
    if(!config.url.includes("http")){
     config.url="http://api_devs.wanxikeji.cn/"+config.url
     console.log( config.url);
    }
    return config
})
service.interceptors.response.use((res)=>{
    return res
})
export default service 