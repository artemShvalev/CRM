import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth';
import info from "./modules/info";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: true,
    error: null,
  },
  mutations: {
    isOpen(state) {
      state.drawer = !state.drawer
    },
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  getters: {
    error: state => state.error
  },
  modules: {
    auth,
    info
  }
})
