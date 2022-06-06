//对api请求进行统一管理

import {http} from "@/common/http";

//封装GET请求
const httpGet=(url,data)=>{
    return new Promise((resolve,reject)=>{
        http.Service({
            method:'get',
            url:url,
            params:data,
        }).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}

//封装POST请求
const httpPost=(url,data)=>{
    return new Promise((resolve, reject)=>{
        http.Service({
            method:'post',
            url:url,
            data:JSON.stringify(data),
        }).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}

//封装api
const login=(data)=>{
    return httpPost('auth/pwd-login',data);
}

const phone = (data) => {
    return httpPost('auth/phone-login', data);
};

const code = (data) => {
    return httpPost('verify/sms-code', data);
};

const getUserInfo = (data) => {
    return httpGet('users/teacher', data);
};

export let api={
    login,
    phone,
    code,
    getUserInfo,
}
