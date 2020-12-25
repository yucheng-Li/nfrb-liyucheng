import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from "element-ui"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/mint-ui.scss'
import { DatetimePicker,Popup,Cell,Picker,Toast } from 'vant';
import axios from 'axios';
import store from './store/store'


Vue.prototype.$axios = axios
Vue.use(Toast);
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.use(DatetimePicker);
Vue.use(Popup);
Vue.use(Cell);
Vue.use(Picker);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
