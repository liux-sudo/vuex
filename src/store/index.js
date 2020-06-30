import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        num: 0,
        name: '刘旭',
        age: 22,
        getters: '用使的retteg是这',
        mapGetters: 'mapGetters'
    },

    // 就是公共的计算属性
    getters: {
        getterMsg: function(state) {
            return state.getters.split('').reverse().join('')
        },
        mapGetters: function(state) {
            return state.mapGetters
        }
    },

    mutations: {
        numAdd(state) {
            state.num += 2
        },
        setNum(state, value) {
            state.num = value
        }
    },
    actions: {

    },
    modules: {

    }
})