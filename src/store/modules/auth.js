import firebase from "firebase/compat/app"

export default {
  actions: {
    // eslint-disable-next-line no-unused-vars
    async login({dispatch, commit}, {email, password}) {
      // eslint-disable-next-line no-useless-catch
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        commit('setError', e)
        throw e 
      }
    },
    async logout({commit}) {
      await firebase.auth().signOut()
      commit('clearInfo')
    },
    async register({dispatch, commit}, {email, password, name}) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        const uid = await dispatch('getUid')
        await firebase.database().ref(`/users/${uid}/info`).set({
          bill: 10000,
          name
        });
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    getUid() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null;
    }
  }
}