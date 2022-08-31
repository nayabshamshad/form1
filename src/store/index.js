import { store } from "quasar/wrappers";
import { createStore } from "vuex";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},

    strict: process.env.DEBUGGING,
  });

  return Store;
});
