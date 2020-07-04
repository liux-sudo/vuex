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
        setDz: function(context, options) {
            let httpUrl = `https://api.apiopen.top/getJoke?page=${options.pageNo}&count=${options.pageSize}&type=video`
            fetch(httpUrl).then(res => res.json()).then(res => {
                let data = res.result
                if (res.code === 200) {
                    context.commit('setDuanzi', data)
                } else {
                    console.log(message)
                }
            })
        },
        setDzTxt: function(context, options) {
            let httpUrl = `https://api.apiopen.top/getJoke?page=${options.pageNo}&count=${options.pageSize}&type=text`
            fetch(httpUrl).then(res => res.json()).then(res => {
                let data = res.result
                if (res.code === 200) {
                    context.commit('setDuanziText', data)
                } else {
                    console.log(message)
                }
            })
        },
        setDzImage: function(context, options) {
            let httpUrl = `https://api.apiopen.top/getJoke?page=${options.pageNo}&count=${options.pageSize}&type=image`
            fetch(httpUrl).then(res => res.json()).then(res => {
                let data = res.result
                if (res.code === 200) {
                    context.commit('setDuanziImg', data)
                } else {
                    console.log(message)
                }
            })
        }
    },
    modules: {

    }
})