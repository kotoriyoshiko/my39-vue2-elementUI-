import Vue from 'vue'
import VueRouter from 'vue-router'
import {menu} from "@/common/menu";
import {getAccessToken} from "@/common/access_token";

Vue.use(VueRouter)

// 修改路由push方法,阻止重复点击报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = menu.router_config

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//导航守卫 判断要进入的页面是否需要token
router.beforeEach((to, from, next)=>{
  //先去本地获取token
  const token=getAccessToken()
  //如果要去的页面是需要token的页面
  if (to.meta.auth===true){
      //token存在的话
    if (token){
      //直接放行
      next();
    }else {
      //无token跳转到登陆页面
      next({path:'/home'})
    }
  }else{
    if (token){
      if (to.name===('login'||'forget_pwd'||'enroll')){
        next({path:'/home'})
      }else {
        next()
      }
    }else {
      next()
    }
  }
})
router.afterEach(() => {
  document.documentElement.scrollTop = 0;
});

export default router
