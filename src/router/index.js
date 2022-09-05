import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { auth } from "../store/firebase";
import { nextTick } from "vue";

export default route(function ({ store }) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    history: createHistory(
      process.env.MODE === "ssr" ? void 0 : process.env.VUE_ROUTER_BASE
    ),
  });
  Router.beforeEach((to, from, next) => {
    if (!store.getters.isAuthenticated) {
      if (to.path != "/sign-in" && to.path != "/sign-up") {
        next("/sign-in");
      } else {
        next();
      }
    } else {
      if (to.path == "/sign-in" || to.path == "/sign-up") {
        if (store.getters.userData?.isUpdated ) {
          next("/");
          return
        } else {
          next("/category-list");
          return;
        }
      } else {
        if(store.getters.userData?.isUpdated == false && to.path !='/category-list') {
          next('/category-list')
          return;
        }
        next();
      }
    }
  });
  return Router;
});
