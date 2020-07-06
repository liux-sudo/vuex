import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        num: 0,
        name: '刘国旭',
        age: 22,
        getters: '用使的retteg是这',
        mapGetters: 'mapGetters',
        duanzi: null,
        duanzitext: null,
        duanziImage: null,
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
            state.num += 2;
        },
        setNum(state, value) {
            state.num = value;
        },
        setDuanzi(state, value) {
            state.duanzi = value;
        },
        setDuanziText(state, value) {
            state.duanzitext = value;
        },
        setDuanziImg(state, value) {
            state.duanziImage = value
        }
    },

    // 异步方法
    actions: {
        setDz: function({ commit }, data) {
            commit('setDuanzi', data)
        },
        setDzTxt: function({ commit }, data) {
            commit('setDuanziText', data)
        },
        setDzImage: function({ commit }, data) {
            commit('setDuanziImg', data)
        }
    },
    modules: {

    }
})