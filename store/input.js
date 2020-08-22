export default {
  state: () => ({
    inputContent: ''
  }),
  mutations: {
    changeInputContent: function (state, text) {
      state.inputContent = text
      localStorage.setItem('input/inputContent', text)
    }
  },
  getters: {
    getInputContent: function (state) {
      if (state.inputContent.length > 0) 
        return state.inputContent
      else if (localStorage.getItem('input/inputContent')) 
        return localStorage.getItem('input/inputContent')
      else
        return undefined
    }
  }
}