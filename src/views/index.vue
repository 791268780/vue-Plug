<template>
  <div class="index">
    <router-link :to="item" v-for="(item , i) in obj" :key="i">{{i}}</router-link>
  </div>
</template>

<style scoped lang="scss">

.index {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

a {
  display: inline-block !important;
  min-width: 30vmin;
  height: 6vmin;
  line-height: 6vmin;
  border-radius: 3vmin;
  padding: 0 3vmin;
  background: linear-gradient( #efb6d5 , #ea16b3 , #9816ea , #1692ea , #16ea75  , #5eea16 , #c0ea16 ,  #ea7816 , #ea2016);
  color: #fff;
  font-size: 2.5vmin;
  font-weight: bold;
  margin: 3vmin 2vmin 0 !important;
}

</style>


<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'index',
  components: {
  },
})

export default class Index extends Vue {
  public obj = { // 名称：路由，
    'better-scroll楼层滚动': '/better-scroll/index',
    'Cookie操作': '/cookie',
    'Vuex数据集中管理' : '/vuex',
    '用户登录': '/Login',
    '兄弟传参': '/bus',
    '放大境': '/magnifier',
    'WebStorage监听Storage事件':'/WebStorageStorage',
  };


  // // 在mounted后面 调用 beforeRouteEnter守卫传给 next 的回调函数之前调用
  // public activated() { // 在组件第一次渲染时会被调用，之后在每次缓存组件被激活时调用
  //   console.log('组件第一次加载 缓存');
  // }

  // public deactivated() { // 组件被停用(离开路由)时调用 (不一定被销毁了)
  //   console.log('组件被停用 离开路由');
  // }



}
</script>
