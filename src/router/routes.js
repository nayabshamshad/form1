const routes = [
  {
    path: "/",
    name: "MainLayout",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "Welcome",
        component: () => import("../pages/HomeView.vue"),
      },
      {
        path: "/sign-in",
        name: "Sign In",
        component: () => import("../pages/signIn.vue"),
      },
      {
        path: "/sign-up",
        name: "Sign Up",
        component: () => import("../pages/signUp.vue"),
      },
      {
        path: "/event-list",
        name: "Events List",
        component: () => import("../pages/Eventlist.vue"),
      },
      {
        path: "/category-list",
        name: "Update Your Profile",
        component: () => import("../pages/CategoryList.vue"),
      },
      {
        path: "/add-event",
        name: "Add Event",
        component: () => import("../pages/addEvent.vue"),
      },
      {
        path: "/view-event",
        name: "Event Details",
        component: () => import("../pages/viewevent.vue"),
      },
      {
        path: "/pending",
        component: () => import("../pages/waitingView.vue"),
        name: "Waiting Page",
      },
      {
        path: '/user-details',
        component: () => import("../pages/userDetails"),
        name: 'User Details'
      },
      {
        path: '/rejected',
        component: () => import('../pages/rejectedView'),
        name: 'Rejected'
      },
      // Always leave this as last one,
      // but you can also remove it
      {
        path: "/:catchAll(.*)*",
        component: () => import("pages/ErrorNotFound.vue"),
      },
    ],
  },

];

export default routes;
