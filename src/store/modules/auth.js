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
  }
}

export default {
  state,
  getters,
  mutations
}
