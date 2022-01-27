import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import info from "./modules/info";
import categories from "./modules/categories";
import record from './modules/record'

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    drawer: true,
    error: null,
  },
  mutations: {
    isOpen(state) {
      state.drawer = !state.drawer;
    },
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {
    fetchCurrency: async function () {
      // const KEY_API = process.env.VUE_APP_KEY
      let res = await fetch(`https://v6.exchangerate-api.com/v6/1a99b7423b062e0890a94e03/pair/EUR/RUB`, {
        method: 'GET',
      })
      // eslint-disable-next-line no-unused-vars
      await res.json
    }
  },
    getters: {
      error: s => s.error,
    },
    modules: {
      auth,
      info,
      categories,
      record
    },
  })