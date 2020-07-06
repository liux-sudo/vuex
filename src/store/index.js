import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    // 就是公共的计算属性
    getters,
    // 同步操作，直接修改state状态
    mutations,
    // 异步方法
    actions,
    modules: {

    }
})