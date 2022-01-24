import firebase from "firebase/compat/app";

export default {
  state: {
    info: {},
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    }
  },
  actions: {
    async updateInfo({commit, dispatch, getters}, toUpdate){
      try {
        const updateData = {...getters.info, ...toUpdate}
        const uid = await dispatch("getUid");
        await firebase.database().ref(`/users/${uid}/info`).update(updateData)
        commit('setInfo', updateData)
      }catch(e) {
        commit('setError', e)
        throw e
      }
    },
    async fetchInfo({ dispatch, commit }) {
      try {
      const uid = await dispatch("getUid");
      const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
      commit('setInfo', info);
      }catch(e) {
        commit('setError', e)
        throw e
      }
    },
  },
  getters: {
    info: state => state.info,
  },
};
