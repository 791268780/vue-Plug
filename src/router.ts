import Vue from 'vue';
import Router from 'vue-router';
import Betterscroll from './views/Betterscroll.vue';
import Index from './views/index.vue';
import Cookie from './views/Cookie.vue';
import Vuex from '@/views/vuex/index.vue';
import Login from '@/views/login.vue';

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
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/cookie',
      name: 'Cookie',
      component: Cookie,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: Vuex,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
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
