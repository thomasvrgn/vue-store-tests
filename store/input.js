export default {
  state: {
    inputContent: ''
  },
  mutations: {
    changeInputContent: function (state, text) {
      state.inputContent = text
    }
  }
}