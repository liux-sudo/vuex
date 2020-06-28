import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        num: 0,
        name: '刘旭',
        age: 22
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