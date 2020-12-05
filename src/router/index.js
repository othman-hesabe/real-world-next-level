import Vue from "vue";
import VueRouter from "vue-router";
// import EventCreate from "../views/EventCreate.vue";
// import EventList from '../views/EventList.vue';
// import EventShow from '../views/EventShow.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: () => 
    import("../views/EventList.vue")
  },
  {
    path: "/EventCreate",
    name: "event-create",
    component: () =>
     import("../views/EventCreate.vue")
  },
  {
    path: "/event/:id",
    name: "event-show",
    props: true,
    component: () =>
     import("../views/EventShow.vue")
  }
 
  
  // {
  //   path: "/about",
  //   name: "About",
  //   // component: About
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //    import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
