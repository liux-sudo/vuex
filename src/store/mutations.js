export default {
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
}