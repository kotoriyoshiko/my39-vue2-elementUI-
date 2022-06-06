//导出默认网络配置
const network={
    // 配后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
    contentType: 'application/json;charset=UTF-8',
    // 消息框消失时间
    messageDuration: 3000,
    // timeout
    requestTimeout: 10000,
    // api地址
    baseURL:
        process.env.VUE_APP_MODE === 'online'
            ? 'https://api.itec-ces.com/'
            : 'http://itecapi.kingbellai.com/',
}

export default network
