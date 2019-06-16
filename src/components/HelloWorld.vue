<template>
  <div class="hello">
      <router-link to="/">
        返回首页 
        <router-link to="/Login" v-show="name === false">请先登录</router-link>
        <router-link to="/Login" v-show="name">欢迎光临：{{uname}}</router-link>
        <span @click.stop="delet" v-show="name">注销</span>
      </router-link>  
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})

export default class HelloWorld extends Vue {
  public name: any = false;
  public uname = '';

  public created() {
    const loc: any = localStorage.getItem('name');
    if (!loc) {
      this.name = false;
      return;
    }
    const str: any = JSON.parse( loc );
    this.name = true;
    this.uname = str.name;
  }

  public delet() {
    localStorage.removeItem('name');
    this.name = false;
  }

  public beforeRouteUpdate(to: any, from: any, next: any) { // 当前路由改变，但是该组件被复用时调用
    console.log('组件被复用了');    
    next(); // 调用进入下一个钩子函数
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
span {
  font-size: 2vmin;
  color: red;
  margin-left: 3vmin;
  background: #fff;
  position: relative;
  z-index: 1000;
  padding: 0 1vmin;
}

.hello {
  & > a {
    display: block;
    width: 100vw;
    padding: 5vmin 3vmin;
    background: linear-gradient( #efb6d5 , #ea16b3 , #9816ea , #1692ea , #16ea75  , #5eea16 , #c0ea16 ,  #ea7816 , #ea2016);
    color: #fff;
    font-size: 3vmin;
    font-weight: bold;
    margin-bottom: 2vmin;
    a {
      font-size: 2vmin;
      color: red;
    }
  }
}

</style>
