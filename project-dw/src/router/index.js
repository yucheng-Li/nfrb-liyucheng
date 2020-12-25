import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Manage from '@/components/manage/Manage.vue'
import Sign from '@/components/info/Sign.vue'
import Fill from '@/components/info/Fill.vue'
import Success from '@/components/info/Success.vue'
import Check from '@/components/info/Check.vue'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/home',
            name:'Home',
            component:Home
        },
        {
            path:'/',redirect:'/home'
        },
        {
            path:'/manage',
            name:'Manage',
            component:Manage
        },
        {
            path:'/sign',
            name:'Sign',
            component:Sign
        },
        {
            path:'/fill',
            name:'Fill',
            component:Fill
        },
        {
            path:'/success',
            name:'Success',
            component:Success
        },
        {
            path:'/check',
            name:'Check',
            component:Check
        }
    ]
})