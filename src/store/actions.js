export default {
    setDz: function({ commit }, data) {
        commit('setDuanzi', data)
    },
    setDzTxt: function({ commit }, data) {
        commit('setDuanziText', data)
    },
    setDzImage: function({ commit }, data) {
        commit('setDuanziImg', data)
    }
}