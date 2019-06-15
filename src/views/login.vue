<template>
  <div class="login">
    <HelloWorld />
    用户名：<input type="text" v-model="uname"><br/><br/>
    密码：<input type="password" v-model="password"><br/><br/>
    <button @click="local" @keydown.enter="local">提交</button>
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
    console.log(str);
    str.forEach((obj: any) => {
      if ( this.uname.toString() === obj.name.toString() && this.password.toString() === obj.password.toString() ) {
        if ( !localStorage.getItem('name') ) {
          alert('登录成功！');
          localStorage.setItem('name', JSON.stringify(obj));
          this.$router.push({ path: '/' });
        }  else {
          alert('以有用户登录，请先注销');
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
}
</script>
