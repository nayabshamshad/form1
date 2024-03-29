const routes = [
  {
    path: "/",
    name: "" /* Welcome */,
    component: () => import("../pages/HomeView.vue"),
  },
  {
    path: "/edit-profile",
    name: "Edit Profile",
    component: () => import("../pages/CategoryList.vue"),
  },
  {
    path: "/event-list",
    name: "" /* Events List */,
    component: () => import("../pages/Eventlist.vue"),
  },
  {
    path: "/signup_department",
    name: "Create Department",
    component: () => import("../pages/signUpDepartment.vue"),
  },
  {
    path: "/add-event",
    name: "" /* Add Event */,
    component: () => import("../pages/addEvent.vue"),
  },
  {
    path: "/view-event",
    name: "" /* Event Details */,
    component: () => import("../pages/viewevent.vue"),
  },
  {
    path: "/user-details/:uid",
    component: () => import("../pages/userDetails"),
    name: "" /* User Details */,
  },
  {
    path:"/id-card/:uid",
    component:() => import("../pages/card_id"),
    name:"card-id" /* card-id */,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
