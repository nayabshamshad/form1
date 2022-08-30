import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    // redirect: "/signUp",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: () => import("../views/signUp.vue"),
  },
  {
    path: "/signIn",
    name: "signIn",
    component: () => import("../views/signIn.vue"),
  },
  {
    path: "/lists",
    name: "lists",
    component: () => import("../views/lists.vue"),
  },
  {
    path: "/Eventlist",
    name: "Eventlist",
    component: () => import("../views/Eventlist.vue"),
  },
  {
    path: "/CategoryList",
    name: "CategoryList",
    component: () => import("../views/CategoryList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
