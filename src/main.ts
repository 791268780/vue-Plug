import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Minxins from '@/mixins/config';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {  // 路由钩子函数
  if (to.matched.some( (record) =>  record.meta.requireAuth )) { // 判断该路由是否需要登录权限
    const uname = localStorage.getItem('name');
    if (uname) { // 判断当前的user_id是否存在 ； 登录存入的user_id
      next(); // 跳转到点击的页面
    } else {
      alert('请先登录');
      next({ // 跳转到该路由
        path: '/Login',
        query: {redirect: `${to.fullPath}`}, // 将要跳转路由的path作为参数，传递到登录页面
      });
    }
  } else {
    next();
  }});


new Vue({
  mixins: [Minxins],
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
