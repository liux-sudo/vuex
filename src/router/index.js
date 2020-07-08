import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/HelloWorld'
import home from '@/view/home'
import state from '@/view/state'
import getter from '@/view/getter'
import action from '@/view/actions'
import modules from '@/view/modules'

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
    }, {
        path: '/getter',
        name: 'getter',
        component: getter
    }, {
        path: '/actions',
        name: 'actions',
        component: action
    }, {
        path: '/modules',
        name: 'modules',
        component: modules
    }]
})