const state = () => ({
  user: localStorage.getItem('user') || ''
})

const getters = {
  getUser: (state) => !!state.user
}

const mutations = {
  setUser (state, user) {
    state.user = user
    localStorage.setItem('user', user)
  }
}

export default {
  state,
  getters,
  mutations
}
