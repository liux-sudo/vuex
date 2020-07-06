export default {
    state: {
        num: 1
    },
    getters: {
        changeNum: function(state) {
            return state.num + "件衣服"
        }
    },
    mutations: {

    }
}