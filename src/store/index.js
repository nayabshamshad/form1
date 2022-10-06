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
      dateList: {},
      userList: [],
      selectedUser: [],
    },
    getters: {
      selectedUser(state) {
        return state.selectedUser;
      },
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
      dateList(state) {
        return state.dateList;
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
      approveUser(state, uid) {
        const index = state.userList.findIndex((x) => {
          return x.uid == uid;
        });
        state.userList[index].isAuthorized = true;
      },
      declineUser(state, uid) {
        const index = state.userList.findIndex((x) => {
          return x.uid == uid;
        });
        state.userList[index].isAuthorized = false;
      },
      setSelectedUser(state, user) {
        state.selectedUser = user;
      },
      setDateList(state, payload) {
        state.dateList = payload;
      },
    },
    actions: {
      async finalizeReset({}, payload) {
        let error = { err: false };
        await auth
          .confirmPasswordReset(payload.code, payload.pass)
          .then(() => {})
          .catch((err) => {
            error.err = true;
            Notify.create({
              message: err.message,
              color: "red",
            });
          });
        return error;
      },
      async verifyReset({}, payload) {
        let error = { err: false };
        await auth
          .verifyPasswordResetCode(payload)
          .then((res) => {})
          .catch(() => {
            error.err = true;
            Notify.create({
              message:
                "Codul de resetare e invalid sau expirat. Vă rugăm să trimiteți din nou o cerere de resetare.",
              color: "red",
            });
            this.$router.push("/");
          });
        return error;
      },
      async sendResetEmail({}, payload) {
        let error = {
          err: false,
        };
        await auth
          .sendPasswordResetEmail(payload)
          .then(() => {})
          .catch((err) => {
            error.err = true;
            if (err.code == "auth/user-not-found") {
              console.log(err);
              Notify.create({
                message: "Nu există utilizator cu aceasta adresa de e-mail.",
                color: "red",
              });
            } else if (err.code == "auth/invalid-email") {
              Notify.create({
                message: "Te rugăm să introduci o adresa de e-mail validă.",
                color: "red",
              });
            } else {
              Notify.create({
                message: err.message,
                color: "red",
              });
            }
          });
        return error;
      },
      async signOutUser({ commit }) {
        await auth.signOut();
        commit("setUserData", null);
        commit("setCurrentUser", null);
        this.$router.push("/sign-in");
      },
      async getUserData({ state, commit }) {
        await firestore
          .doc(auth.currentUser.uid)
          .get()
          .then((res) => {
            commit("setCurrentUser", auth.currentUser);
            commit("setUserData", res.data());
          });
        if (state.userData.date) {
          commit("setDateList", state.userData.date);
        }
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
                message: "Adresă de e-mail este deja folosită.",
                color: "red",
              });
            } else if (err.code == "auth/invalid-email") {
              Notify.create({
                message: "Te rugăm să introduci o adresa de e-mail validă.",
                color: "red",
              });
            } else if (err.code == "auth/weak-password") {
              Notify.create({
                message: "Parola trebuie să aibă minim 6 caaractere.",
                color: "red",
              });
            } else {
              Notify.create({
                message: err.message,
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
            phoneNumber: payload.phoneNumber,
            tagList: [],
            clubName: "",
            status: "",
            category: "",
            size: "",
            isUpdated: false,
            uid: auth.currentUser.uid,
            email: payload.email,
            department: payload.department,
            imgUrl: payload.imgUrl,
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
      async signUpDepartment({ commit }, payload) {
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
            } else {
              Notify.create({
                message: err.message,
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
            isAuthorized: true,
            eventList: [],
            teamList: [],
            role: "department",
            dateOfBirth: "",
            Instructor: "",
            Ghid: "",
            masterGhid: "",
            region: "",
            state: "",
            gender: "",
            etnic: "",
            phoneNumber: payload.phoneNumber,
            tagList: [],
            clubName: "",
            status: "",
            category: "",
            size: "",
            isUpdated: true,
            uid: auth.currentUser.uid,
            email: payload.email,
            departmentName: payload.departmentName,
            date: { from: "03/03/2022", to: "04/04/2022" },
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
      async updateUserProfile({ state, commit, dispatch }, payload) {
        await firestore.doc(state.currentUser.uid).update(payload);
        await dispatch("getUserData");
      },
      async updateUserProfileAdmin({ commit, dispatch }, payload) {
        await firestore.doc(payload.uid).update(payload);
        await dispatch("getUserData");
        await dispatch("getUserList");
        commit('setSelectedUser', payload)
      },
      async signInUser({ state, commit }, payload) {
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
                message: "Te rugăm să introduci parola din nou.",
              });
            } else if (err.code == "auth/invalid-email") {
              Notify.create({
                color: "red",
                message: "Te rugăm să introduci o adresa de e-mail validă.",
              });
            } else if (err.code == "auth/too-many-requests") {
              Notify.create({
                color: "red",
                message:
                  "Prea multe încercări de logare eșuate. Contul a fost inchis temporar.",
              });
            } else if (err.code == "auth/user-not-found") {
              Notify.create({
                color: "red",
                message: "Nu există utilizator cu aceasta adresa de e-mail.",
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
        if (
          state.userData.role != "department" &&
          state.userData.role != "admin"
        ) {
          await firestore
            .get()
            .then((res) => {
              let arr = [];
              res.forEach((x) => {
                arr.push(x.data());
              });
              const b = arr.filter((x) => {
                return state.userData.department == x.departmentName;
              });
              commit("setDateList", b[0].date);
            })
            .catch((err) => {
              console.log(err);
            });
          if (error) {
            return;
          }
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

      // Admin Functions
      async approveUser({ commit }, uid) {
        await firestore
          .doc(uid)
          .update({
            isAuthorized: true,
          })
          .then(() => {})
          .catch((err) => {
            Notify.create({
              color: "red",
              message: err.message,
            });
          });
        commit("approveUser", uid);
      },
      async declineUser({ commit }, uid) {
        await firestore
          .doc(uid)
          .update({
            isAuthorized: false,
          })
          .then(() => {})
          .catch((err) => {
            Notify.create({
              color: "red",
              message: err.message,
            });
          });
        commit("declineUser", uid);
      },
      setSelectedUser({ commit }, payload) {
        commit("setSelectedUser", payload);
      },
      async updatedUserDetails({ commit }, uid) {
        await firestore
          .doc(uid)
          .get()
          .then((res) => {
            commit("setSelectedUser", res.data());
          });
      },
      async setDateRange({ state, commit, dispatch }, payload) {
        await firestore.doc(payload.uid).update({ date: payload.date });
        commit("setDateList", payload.date);
        if (this.state.userData.role == "admin") {
          dispatch("getUserList");
        }
      },
    },
    plugins: [createPersistedState()],

    strict: process.env.DEBUGGING,
  });
  return Store;
});
