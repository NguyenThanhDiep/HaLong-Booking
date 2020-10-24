import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: require('@/components/Home/home.component.vue').default
  },
  {
    path: "/findHotel",
    name: "FindHotel",
    component: () =>
      import("../components/FindHotel/findHotel.component.vue")
  },
  {
    path: '/hotel/:hotelId',
    name: "Hotel",
    component: () =>
      import("../components/Hotel/hotel.component.vue")
  },
  {
    path: "/room/:roomId",
    name: "Room",
    component: () =>
      import("../components/Room/room.component.vue")
  },
  {
    path: "/travelExperience",
    name: "TravelExperience",
    component: () =>
      import("../components/TravelExperience/travelExperience.component.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
