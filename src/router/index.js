import Vue from "vue";
import VueRouter from "vue-router";
// import EventCreate from "../views/EventCreate.vue";
// import EventList from '../views/EventList.vue';
// import EventShow from '../views/EventShow.vue';
import NProgress from 'nprogress';
import store from '@/store/index.js';

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
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('event/fetchEvent', routeTo.params.id).then(event => {
        routeTo.params.event = event
        next()
      })
       .catch(error => {
            if (error.response && error.response.status == 404) {
              next({ name: '404', params: { resource: 'event' } })
            } else {
              next({ name: 'network-issue' })
            }
          })
    }
  },
 
  
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
router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() =>{
  NProgress.done()
})

export default router;

