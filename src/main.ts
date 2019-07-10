import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Component from 'vue-class-component'; // 用于注册 路由 组件钩子函数
import Minxins from '@/mixins/config';

// import Navigation from 'vue-navigation';  // ts引入不成功

Vue.config.productionTip = false;

Component.registerHooks([ // 注册路由组件钩子函数            有bug!!!!!!
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate', // for vue-router 2.2+
]);

router.beforeEach((to, from, next) => {  // 路由钩子函数
  if (to.matched.some( (record) =>  record.meta.requireAuth )) { // 判断该路由是否需要登录权限
    const uname = localStorage.getItem('name');
    if (!uname) { // 判断当前的user_id是否存在 ； 登录存入的user_id
      const i = confirm('请先登录?');
      if ( i ) {
        next({ // 跳转到该路由
          path: '/Login',
          query: {redirect: `${to.fullPath}`}, // 将要跳转路由的path作为参数，传递到登录页面
        });
      }
      return;
    }
    next();
    return;
  }
  next();
  });

router.afterEach((to, from) => { // to 即将进入的路由  from 即将离开的路由
  console.log('即将进入：', to);
  console.log('即将离开：', from);
  window.scrollTo(0, 0); // 将页面返回最顶端
});

router.beforeResolve((to, from, next) => { // 全局解析守卫(2.5.0+) 在 组件路由钩子beforeRouteEnter调用之后调用
  console.log('解析守卫被调用了');
  next();
});


Vue.prototype.resetSetItem = function (key: any, newVal: any) {  // 自定义事件 监听webStorage 数据改变
  if (key === 'watchStorage') {
      // 创建一个StorageEvent事件
      var newStorageEvent = document.createEvent('StorageEvent');
      const storage = {
          setItem: function ( k: any, val: any) {
              sessionStorage.setItem(k, val);
              // 初始化创建的事件
              newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null); // 重要
              // 派发对象 
              window.dispatchEvent(newStorageEvent); // 重要
          }
      }
      return storage.setItem(key, newVal);
  }
}


new Vue({
  mixins: [Minxins],
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
