import Vue from 'vue';
import Router from 'vue-router';
import Betterscroll from './views/Betterscroll.vue';
import Index from './views/index.vue';
// import Cookie from './views/Cookie.vue';
import Vuex from '@/views/vuex/index.vue';
import Login from '@/views/login.vue';
// import busCom from '@/views/BrotherBus/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        keepAlive: true,  // 需要缓存
      },
    },
    {
      path: '/better-scroll/:id',
      name: 'Betterscroll',
      component: Betterscroll, // 非懒加载
      meta: {
        requireAuth: true, // 需要路由守卫验证
        keepAlive: true,  // 需要缓存
      },
    },
    {
      path: '/cookie',
      name: 'Cookie',
      component: (resolve) => require(['@/views/Cookie'], resolve), // 懒加载 可能打包后可能报错 解决首次加载时间长的问题
      meta: {
        keepAlive: true,  // 需要缓存
        requireAuth: true,
      },
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: Vuex,
      meta: {
        keepAlive: true,  // 需要缓存
        requireAuth: true,
      },
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        keepAlive: true,  // 需要缓存
      },
    },
    {
      path: '/bus',
      name: 'bus',
      component: () => import(/* webpackChunkName: "about" */ './views/BrotherBus/index.vue'),
      meta: {
        keepAlive: true,  // 需要缓存
        requireAuth: true,
      },
    },
    {
      path: '/magnifier',
      name: 'Magnifier',
      component: () => import(/* webpackChunkName: "about" */ './views/magnifierVue/index.vue'),
      meta: {
        keepAlive: true,  // 需要缓存
        requireAuth: true,
      },
    },
    {
      path: '/WebStorageStorage',
      name: 'WebStorageStorage',
      component: () => import(/* webpackChunkName: "about" */ './views/WebStorage_Storage/set.vue'),
      meta: {
        keepAlive: true,  // 需要缓存
        requireAuth: true,
      },
    },
    {
      path: '/get',
      name: 'get',
      component: () => import(/* webpackChunkName: "about" */ './views/WebStorage_Storage/get.vue'),
      meta: {
        keepAlive: true,  // 需要缓存
        requireAuth: true,
      },
    },

  ],
});
