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
      isAuthenticated() {
        if (auth.currentUser) {
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
      async signOutUser({ commit }) {
        await auth.signOut();
        commit("setUserData", null);
        commit("setCurrentUser", null);
        this.$router.push("/sign-in");
      },
      async getUserData({ commit }) {
        firestore
          .doc(auth.currentUser.uid)
          .get()
          .then((res) => {
            this.commit("setUserData", res.data());
          });
      },
      async signUp({ commit }, payload) {
        await auth
          .createUserWithEmailAndPassword(payload.email, payload.password)
          .then((res) => {
            auth.currentUser
              .updateProfile({
                displayName: payload.name,
              })
              .catch((err) => {
                alert(err.message);
              });
            firestore
              .doc(auth.currentUser.uid)
              .set({
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
              })
              .catch((err) => {
                alert(err.message);
                return err.message;
              });
            commit("setCurrentUser", auth.currentUser);
          })
          .catch((err) => {
            alert(err.message);
          });
        await firestore
          .doc(auth.currentUser.uid)
          .get()
          .then((response) => {
            commit("setUserData", response.data());
          })
          .catch((err) => {
            alert(err.message);
            return err.message;
          });
        this.$router.push("/category-list");
      },
      async updateUserProfile({ commit }, payload) {
        if (auth.currentUser) {
          await firestore.doc(auth.currentUser.uid).update(payload);
          await firestore
            .doc(auth.currentUser.uid)
            .get()
            .then((res) => {
              commit("setUserData", res.data());
            });
        } else {
          this.$router.push("/sign-in");
        }
      },
      async signInUser({ commit }, payload) {
        await auth
          .signInWithEmailAndPassword(payload.email, payload.password)
          .then((res) => {
            commit("setCurrentUser", auth.currentUser);
          })
          .catch((err) => {
            alert(err.message);

            console.log(err.message);
            return err.message;
          });
        await firestore
          .doc(auth.currentUser.uid)
          .get()
          .then((response) => {
            commit("setUserData", response.data());
          })
          .catch((err) => {
            alert(err.message);
            console.log(err.message);
            return err.message;
          });
        this.$router.push("/");
      },
    },

    strict: process.env.DEBUGGING,
  });

  return Store;
});
