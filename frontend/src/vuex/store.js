import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate"
import SecureLS from "secure-ls"

const ls = new SecureLS({ isCompression: false })

// --- Module Imports --- //
import loginModule from "./Modules/login"
import initAuthModule from "./Modules/InitAuth"

export default createStore({
  modules: {
    loginModule,
    initAuthModule,
  },
  state: {
    isSuccess: false,
  },
  mutations: {
    SET_ISSUCCESS(state, bool) {
      state.isSuccess = bool
    },
  },
  actions: {},
  getters: {
    returnIsSuccess: state => state.isSuccess,
  },
  plugins: [
    createPersistedState({
      paths: [""],
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key),
      },
    }),
  ],
})
