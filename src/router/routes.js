const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../pages/HomeView.vue"),
  },
  {
    path: "/sign-in",
    name: "signIn",
    component: () => import("../pages/signIn.vue"),
  },
  {
    path: "/sign-up",
    name: "signUp",
    component: () => import("../pages/signUp.vue"),
  },
  {
    path: "/event-list",
    name: "eventList",
    component: () => import("../pages/Eventlist.vue"),
  },
  {
    path: "/category-list",
    name: "categoryList",
    component: () => import("../pages/CategoryList.vue"),
  },
  {
    path: "/add-event",
    name: "addevent",
    component: () => import("../pages/addevent.vue"),
  },
  {
    path: "/view-event",
    name: "viewevent",
    component: () => import("../pages/viewevent.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];


export default routes;
