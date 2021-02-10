import { createStore, createLogger } from 'vuex'
import auth from './modules/auth'
import user from './modules/user'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    auth,
    user
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
