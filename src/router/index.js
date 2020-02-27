import Vue from "vue";
import VueRouter from "vue-router";
import AllTasks from "../views/AllTasks.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: { name: "AllTasks" }
  },
  {
    path: "/all",
    name: "AllTasks",
    component: AllTasks
  },
  {
    path: "/completed",
    name: "CompletedTasks",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CompletedTasks.vue")
  },
  {
    path: "/missed",
    name: "MissedTasks",
    component: () => import("../views/MissedTasks.vue")
  },
  {
    path: "/pending",
    name: "PendingTasks",
    component: () => import("../views/PendingTasks.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
