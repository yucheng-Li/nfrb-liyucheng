import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from "element-ui"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/mint-ui.scss'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
