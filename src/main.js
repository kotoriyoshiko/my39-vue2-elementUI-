import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {http} from '@/common/http'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted() {
    http.init(this)
  },
  render: h => h(App)
}).$mount('#app')
