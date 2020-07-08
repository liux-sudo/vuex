export default {
    namespaced: true,
    state: {
        numjian: 10
    },
    getters: {
        changeNumMsg: function(state) {
            return state.numjian + "件衣服"
        }
    },
    mutations: {
        changeNum: function(state, val) {
            return state.numjian += val
        }
    },
    actions: {
        interval: function({ commit }, numjian) {
            commit('changeNum', numjian)
        }
    }
}