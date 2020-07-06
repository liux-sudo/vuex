export default {
    getterMsg: function(state) {
        return state.getters.split('').reverse().join('')
    },
    mapGetters: function(state) {
        return state.mapGetters
    }
}