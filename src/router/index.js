import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";

export default route(function ({ store }) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes: [
      {
        path: "/",
        name: "Layout",
        component: () => import("../layouts/MainLayout.vue"),
        children: routes,
      },
    ],

    history: createHistory(
      process.env.MODE === "ssr" ? void 0 : process.env.VUE_ROUTER_BASE
    ),
  });
  Router.beforeEach((to, from, next) => {
    if (!store.getters.isAuthenticated) {
      if (
        to.path != "/sign-in" &&
        to.path != "/sign-up" &&
        to.path != "/reset_password" &&
        to.path != "/signup_department/"
      ) {
        next("/sign-in");
      } else {
        next();
      }
    } else {
      if (
        to.path == "/sign-in" ||
        to.path == "/sign-up" ||
        to.path == "/signup_department/"
      ) {
        if (
          store.getters.userData?.isUpdated &&
          store.getters.userData?.isAuthorized == true &&
          to.path != "/"
        ) {
          next("/");
          return;
        } else if (
          store.getters.userData?.isUpdated == false &&
          store.state.userData?.isAuthorized == true &&
          to.path != "/category-list"
        ) {
          next("/category-list");
          return;
        } else if (store.getters.userData?.isAuthorized == "pending") {
          next("/pending");
          return;
        } else if (store.state.userData?.isAuthorized == false) {
          next("/rejected");
          return;
        }
      } else if (
        store.getters.userData?.isUpdated == false &&
        to.path != "/category-list" &&
        store.getters.userData?.isAuthorized == true
      ) {
        next("/category-list");
        return;
      } else if (
        store.state.userData?.isUpdated == true &&
        store.state.userData?.isAuthorized == true
      ) {
        if (to.path != "/category-list") {
          next();
          return;
        } else {
          next("/");
          return;
        }
      } else if (
        store.state.userData?.isAuthorized == "pending" &&
        to.path != "/pending"
      ) {
        next("/pending");
        return;
      } else if (
        store.state.userData?.isAuthorized == false &&
        to.path != "/rejected"
      ) {
        next("/rejected");
        return;
      } else {
        next();
        return;
      }
    }
  });
  return Router;
});
