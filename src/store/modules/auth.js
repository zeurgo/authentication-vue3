const state = () => ({
  token: localStorage.getItem('token') || ''
})

const getters = {
  isAuthenticated: (state) => !!state.token
}

const mutations = {
  setToken (state, token) {
    state.token = token
    localStorage.setItem('token', token)
  },

  logout (state) {
    state.token = ''
    localStorage.setItem('token', '')
  }
}

export default {
  state,
  getters,
  mutations
}
