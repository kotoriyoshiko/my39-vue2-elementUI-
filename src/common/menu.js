//路由相关配置

//路由懒加载
function loadView(view_path){
    return ()=>{
        import(
            `@/views/${view_path}.vue`
            )
    }
}

import Layout from "@/layout/index";

//配置路由
const router_config=[
    {
        path:'/',
        component:Layout,
        // redirect:{
        //     path:'/home'
        // },
        children:[
            {
                path: 'home',
                component:loadView('home'),
                name:'home',
                meta:{
                    layout:'app-main',
                    auth:false,
                }
            },
            {
                path: 'login',
                component: loadView('login'),
                name: 'login',
                meta: {
                    layout: 'app-main',
                    auth: false,
                },
            },
            {
                path: '/forgetpwd',
                name: 'forget_pwd',
                component: loadView('forget_pwd'),
                meta: {
                    layout: 'app-main',
                    auth: false,
                },
            },
            {
                path: '/enroll',
                name: 'enroll',
                component: loadView('enroll'),
                meta: {
                    layout: 'app-main',
                    auth: false,
                },
            }
        ]
    }
]

export let menu={
    router_config
}

