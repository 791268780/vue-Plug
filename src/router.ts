import Vue from 'vue';
import Router from 'vue-router';
import Betterscroll from './views/Betterscroll.vue';
import Index from './views/index.vue';
import Cookie from './views/Cookie.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/better-scroll',
      name: 'Betterscroll',
      component: Betterscroll,
    },
    {
      path: '/cookie',
      name: 'Cookie',
      component: Cookie,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
