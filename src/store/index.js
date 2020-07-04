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
        }
    },

    // 异步方法
    actions: {
        setDz: function(context) {
            let httpUrl = 'https://api.apiopen.top/getJoke?page=1&count=20&type=video'
            fetch(httpUrl).then(res => res.json()).then(res => {
                let data = res.result
                if (res.code === 200) {
                    context.commit('setDuanzi', data)
                } else {
                    console.log(message)
                }
            })
        }
    },
    modules: {

    }
})