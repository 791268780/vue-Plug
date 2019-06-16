import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Component from 'vue-class-component'; // 用于注册 路由 组件钩子函数
import Minxins from '@/mixins/config';

Vue.config.productionTip = false;

Component.registerHooks([ // 注册路由组件钩子函数
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate', // for vue-router 2.2+
])

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

router.afterEach((to, from) => { // to 即将进入的路由  from 即将离开的路由
  console.log('即将进入：', to);
  console.log('即将离开：', from);
  window.scrollTo(0, 0); // 将页面返回最顶端
})

router.beforeResolve((to, from, next) => { // 全局解析守卫(2.5.0+) 在 组件路由钩子beforeRouteEnter调用之后调用
  console.log('解析守卫被调用了');
  next();
});

new Vue({
  mixins: [Minxins],
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
