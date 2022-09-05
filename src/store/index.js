import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import { auth, firestore } from "./firebase";
import createPersistedState from "vuex-persistedstate";
import { Notify } from "quasar";

export default store(function () {
  const Store = createStore({
    state: {
      currentUser: null,
      userData: null,
      selectedEvent: {
        name: "",
        date: "",
        desc: "",
        attendanceList: [],
      },
      userList: [],
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
      selectedEvent(state) {
        return state.selectedEvent;
      },
      userList(state) {
        return state.userList;
      },
    },
    mutations: {
      setCurrentUser(state, payload) {
        state.currentUser = payload;
      },
      setUserData(state, payload) {
        state.userData = payload;
      },
      selectEvent(state, payload) {
        state.selectedEvent = payload;
      },
      setUserList(state, payload) {
        state.userList = payload;
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
        // debugger;
        await firestore
          .doc(auth.currentUser.uid)
          .get()
          .then((res) => {
            commit("setCurrentUser", auth.currentUser);
            commit("setUserData", res.data());
          });
      },
      async signUp({ commit }, payload) {
        var error = false;
        await auth
          .createUserWithEmailAndPassword(payload.email, payload.password)
          .then(() => {})
          .catch((err) => {
            error = true;
            if (err.code == "auth/email-already-in-use") {
              Notify.create({
                message: "Email address already in use",
                color: "red",
              });
            } else if (err.code == "auth/invalid-email") {
              Notify.create({
                message: "Please enter a valid email address",
                color: "red",
              });
            } else if (err.code == "auth/weak-password") {
              Notify.create({
                message: "Password must be atleast 6 characters long",
                color: "red",
              });
            }
          });
        if (error) {
          return;
        }
        await auth.currentUser
          .updateProfile({
            displayName: payload.name,
          })
          .catch((err) => {
            error = true;
            Notify.create({
              message: err.message,
              color: "red",
            });
          });
        if (error) {
          return;
        }
        await firestore
          .doc(auth.currentUser.uid)
          .set({
            name: payload.name,
            isAuthorized: "pending",
            eventList: [],
            teamList: [],
            role: "teamLead",
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
            uid: auth.currentUser.uid,
            email: payload.email,
          })
          .catch((err) => {
            error = true;
            Notify.create({
              message: err.message,
              color: "red",
            });
            return err.message;
          });
        if (error) {
          return;
        }
        commit("setCurrentUser", auth.currentUser);

        await firestore
          .doc(auth.currentUser.uid)
          .get()
          .then((response) => {
            commit("setUserData", response.data());
          })
          .catch((err) => {
            error = true;
            Notify.create({
              message: err.message,
              color: "red",
            });
          });
        if (error) {
          return;
        }
        this.$router.push("/category-list");
      },
      async updateUserProfile({ commit, dispatch }, payload) {
        if (auth.currentUser) {
          await firestore.doc(auth.currentUser.uid).update(payload);
          await dispatch("getUserData");
        } else {
          this.$router.push("/sign-in");
        }
      },
      async signInUser({ commit }, payload) {
        var error = false;
        await auth
          .signInWithEmailAndPassword(payload.email, payload.password)
          .then((res) => {
            commit("setCurrentUser", auth.currentUser);
          })
          .catch((err) => {
            error = true;
            console.log(err.code);
            if (err.code == "auth/wrong-password") {
              Notify.create({
                color: "red",
                message: "Please recheck your password and try again",
              });
            } else if (err.code == "auth/invalid-email") {
              Notify.create({
                color: "red",
                message: "Please enter a valid email address",
              });
            } else if (err.code == "auth/too-many-requests") {
              Notify.create({
                color: "red",
                message:
                  "Too many failed attempts, this account has been temporarily disabled",
              });
            } else if (err.code == "auth/user-not-found") {
              Notify.create({
                color: "red",
                message: "We cannot find a user with this email address",
              });
            } else {
              Notify.create({
                color: "red",
                message: err.message,
              });
            }
          });
        if (error) {
          return;
        }
        await firestore
          .doc(auth.currentUser.uid)
          .get()
          .then((response) => {
            commit("setUserData", response.data());
            if (response.data()?.isUpdated == false) {
              this.$router.push("/category-list");
            } else {
              this.$router.push("/");
            }
          })
          .catch((err) => {
            error = true;
            Notify.create({
              message: err.message,
              color: "red",
            });
            return err.message;
          });
        if (error) {
          return;
        }
      },
      async addEvent({ dispatch, state }, payload) {
        let eventList = [];
        state.userData.eventList.forEach((x) => {
          eventList.push(x);
        });
        eventList.push(payload);
        firestore.doc(auth.currentUser.uid).update({
          eventList: eventList,
        });
        await dispatch("getUserData");
        this.$router.push("/event-list");
      },
      selectEvent({ commit }, payload) {
        commit("selectEvent", payload);
        this.$router.push("/view-event");
      },
      async updateEvent({ dispatch, state }, payload) {
        let index = state.userData.eventList.findIndex((x) => {
          return x.name == payload.name;
        });
        let eventList = [...state.userData.eventList];

        eventList.splice(index, 1);
        eventList.push(payload);
        await firestore.doc(auth.currentUser.uid).update({
          eventList: eventList,
        });
        await dispatch("getUserData");
        this.$router.push("/event-list");
      },
      async getUserList({ commit }) {
        var userList = [];
        await firestore.get().then((res) => {
          res.forEach((x) => {
            userList.push(x.data());
          });
          commit("setUserList", userList);
        });
      },
    },
    plugins: [createPersistedState()],

    strict: process.env.DEBUGGING,
  });
  return Store;
});
