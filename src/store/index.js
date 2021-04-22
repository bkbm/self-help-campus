import { createStore } from "vuex";
import * as firebase from "../firebase";
import router from "../router/index";

console.log(router, firebase);
export default createStore({
  state: {
    userProfile: {},
    worksheet: {}
  },
  getters: {
    getUserProfile(state) {
      return state.userProfile;
    },
    getWorksheet(state){
      return state.worksheet;
    }
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
    },
    setWorksheetTemplate(state,val){
      state.worksheet = val;
    }
  },
  actions: {
    async login({ dispatch }, form) {
      const { user } = await firebase.auth.signInWithEmailAndPassword(
        form.email,
        form.password
      );

      dispatch("fetchUserProfile", user);
    },
    async fetchUserProfile({ commit }, user) {
      const userProfile = await firebase.usersCollection.doc(user.uid).get();

      commit("setUserProfile", userProfile.data());

      router.push("/dashboard");
    },
    async signup({ dispatch }, form) {
      const { user } = await firebase.auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );

      await firebase.usersCollection.doc(user.uid).set({
        firstName: form.firstName,
        secondName: form.secondName,
        title: form.title,
      });

      dispatch('fetchUserProfile', user)
    },
  },
  modules: {},
});
