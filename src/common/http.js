//基于axios的XHR请求核心封装
import axios from "axios";
import network from '@/config/net.config'
import store from "@/store";
import {getAccessToken} from "@/common/access_token";

let {contentType,requestTimeout,baseURL}=network;

let _vm=null;

const init=(vm)=>{
    _vm=vm
}

//定义error_code
const TOKEN_INVALID = 40101;
const BAD_REQUEST = 40000;

//创建axios实例
let Service=axios.create({
    baseURL,
    timeout:requestTimeout,
    headers:{
        'Content-Type':contentType
    }
})

//添加请求拦截器
Service.interceptors.request.use((config)=>{
    //获取token
    const token=getAccessToken()
    //并将其添加到请求头中
    token&&(config.headers['token']=token)
    //设置请求头
    config.headers['Content-Type']='application/x-www-form-urlencoded'
    return config
})

//添加响应拦截器
Service.interceptors.response.use((response)=>{
    //2XX状态码直接返回接口数据
    return response.data
},(error)=>{
    //非2XX状态码进行错误处理
    if (error&&error.response){
        //根据err_code进行对应的提示
        switch (error.response.data.err_code){
            case TOKEN_INVALID:
                store.dispatch('resetAccessToken')
                _vm.$router.push('/login')
                break;
            case BAD_REQUEST:
                console.log('400');
                _vm.$message.error('请求错误，请联系管理员');
                break;
        }
    }
})

export let http={
    init,
    Service
}


