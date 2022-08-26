import { createStore } from "vuex";
import { auth, firestore } from "../firebase";

export default createStore({
  state: {
    activeUser: "",
  },
  getters: {
    getActiveUser(state) {
      return state.activeUser;
    },
  },
  mutations: {
    setActiveUser(state, payload) {
      state.activeUser = payload;
    },
  },
  actions: {
    async signUpUser({ commit }, payload) {
      await auth
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .catch((err) => {
          console.log(err);
        });

      await auth.currentUser.updateProfile({
        displayName: payload.name,
        isApproved: false,
      });
      firestore
        .collection("userList")
        .get()
        .then((res) => {
          res.forEach((x) => {
            console.log(x.data());
          });
        })
        .catch((err) => {
          console.log(err, "rere");
        });

      commit("setActiveUser", auth.currentUser);
    },
  },
  modules: {},
});
