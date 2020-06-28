import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/HelloWorld'
import home from '@/view/home'
import state from '@/view/state'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index
    }, {
        path: '/home',
        name: 'home',
        component: home
    }, {
        path: '/state',
        name: 'state',
        component: state
    }]
})