import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import { auth, firestore } from "./firebase";

export default store(function () {
  const Store = createStore({
    state: {
      currentUser: null,
      userData: null,
    },
    getters: {
      userData(state) {
        return state.userData;
      },
      currentUser(state) {
        return state.currentUser;
      },
      isAuthenticated(state) {
        if (state.currentUser) {
          return true;
        } else {
          return false;
        }
      },
    },
    mutations: {
      setCurrentUser(state, payload) {
        state.currentUser = payload;
      },
      setUserData(state, payload) {
        state.userData = payload;
      },
    },
    actions: {
      async signUp({ commit }, payload) {
        await auth
          .createUserWithEmailAndPassword(payload.email, payload.password)
          .then((res) => {
            auth.currentUser.updateProfile({
              displayName: payload.name,
            });
            firestore.doc(res.user.uid).set({
              name: payload.name,
              isAuthorized: true,
              eventList: [],
              teamList: [],
              dateOfBirth: "",
              Instructor: "",
              Ghid: "",
              masterGhid: "",
              region: "",
              state: "",
              gender: "",
              etnic: "",
              phoneNumber: "",
              tagList: [],
              clubName: "",
              status: "",
              category: "",
              size: "",
              isUpdated: false,
            });
            firestore
              .doc(res.user.uid)
              .get()
              .then((res) => {
                commit("setUserData", res.data());
              });
            commit("setCurrentUser", auth.currentUser);
            this.$router.push("/category-list");
          });
      },
      async updateUserProfile({ commit }, payload) {
        if (auth.currentUser) {
          await firestore.doc(auth.currentUser.uid).update(payload);
          await firestore
            .doc(auth.currentUser.uid)
            .get()
            .then((res) => {
              console.log(res.data());
              commit("setUserData", res.data());
            });
        } else {
          this.$router.push("/sign-in");
        }
      },
    },

    strict: process.env.DEBUGGING,
  });

  return Store;
});
