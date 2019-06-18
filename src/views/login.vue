<template>
  <div class="login">
    <HelloWorld />
    用户名：<input type="text" v-model="uname" @keyup.enter="local"><br/><br/>
    密码：<input type="password" v-model="password" @keyup.enter="local"><br/><br/>
    <button @click="local" >提交</button>
  </div>
</template>

<style scoped lang="scss">


</style>


<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  name: 'login',
  components: {
    HelloWorld,
  },
})

export default class Login extends Vue {
  public name: any = false;
  public uname = '';
  public password = '';

  public local() {
    const str: any = Object.values( this.$store.state.name);
    if ( str.length <= 0 ) {
      return;
    }
    str.forEach((obj: any) => {
      if ( this.uname.toString() === obj.name.toString() && this.password.toString() === obj.password.toString() ) {
        if ( !localStorage.getItem('name') ) {
          alert('登录成功！');
          this.uname = '';
          this.password = '';
          localStorage.setItem('name', JSON.stringify(obj));
          this.$router.push({ path: '/' });
        }  else {
          alert('已有用户登录，请先注销');
          this.uname = '';
          this.password = '';
        }
        this.name = true;
      }
    });
    if (!this.name) {
      alert('用户名或密码错误！！');
      this.uname = '';
      this.password = '';
    }
  }

  public beforeRouteEnter(to: any, from: any, next: any) { // 路由进入该组件前调用
    console.log('进入了该组件');
    next(); // 调用进入下一个钩子函数
  }

  public beforeRouteUpdate(to: any, from: any, next: any) { // 当前路由改变，但是该组件被复用时调用
    console.log('index');    // 可以设置路由动画
    next(); // 调用进入下一个钩子函数
  }

  public beforeRouteLeave(to: any, from: any, next: any) { // 路由离开该组件前调用
    console.log('离开了该组件');
    next(); // 调用进入下一个钩子函数
  }
}
</script>
