//路由相关配置

//路由懒加载
function loadView(view_path){
    return ()=>{
        debugger
        import(
            `@/views/${view_path}.vue`
            )
    }
}

import Layout from "@/layout/index";
import home from "@/views/home";
import menus from "@/views/menu";

//配置路由
const router_config=[
    {
        path:'/',
        component:Layout,
        redirect:{
            path:'/home',
        },
        children:[
            {
                path: 'home',
                component:home,
                name:'home',
                meta:{
                    layout:'app-main',
                    auth:false,
                }
            },
            {
                path: 'menu',
                component: menus,
                name: 'menu',
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

