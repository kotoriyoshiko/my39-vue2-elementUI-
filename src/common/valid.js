//封装自定义验证方法


let checkIsPhone,checkISPwd

//保存所有在验证中使用的正则表达式
let  re_map={
    re_phone: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
    re_pwd:/^(?=.*\d)(?=.*[a-zA-Z])[\x21-\x7E]{6,20}$/
}
//验证手机号
checkIsPhone=function (rule,value,callback){
    //1.定义私有变量
    let  re_phone=re_map.re_phone,
        phone=value;//元素的值
    //2.判断元素是否有值
    if (phone){
        //2.1验证手机格式
        if (re_phone.test(phone)===false){
            return callback(new Error('手机号码格式错误，请重新输入'))
        }
    }
    //3.验证通过
    return callback();
}

//验证密码
checkISPwd=function (rule, value, callback) {
    // 1. 定义私有变量
    let re_pwd = re_map.re_pwd,
        pwd_value = value; // 元素的值
    // 2. 判断元素是否有值
    if (pwd_value) {
        // 2.1 验证手机格式
        if (re_pwd.test(pwd_value) === false) {
            return callback(
                new Error('密码长度在6-20位，应至少包含字母及数字')
            );
        }
    }

    // 3. 通过验证
    return callback();
};

export let common_valid={
    checkIsPhone,
    checkISPwd
        }

