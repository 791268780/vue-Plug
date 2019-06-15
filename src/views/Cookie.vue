<template>
  <div class="cookie">
    <HelloWorld/>
    <button @click="checkCookie">添加Cookie</button>
    <button>删除Cookie</button>
    <button @click="getCookie(undefined)">查找Cookie</button>
  </div>
</template>

<style scoped lang="scss">
  button {
    display: inline-block;
    padding: 2vmin 2vmin;
    border-radius: 3vmin;
    margin: 0 2vmin;
    outline:0;
  }

</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  name: 'cookie',
  components: {
    HelloWorld,
  },
})

export default class Cookie extends Vue {
  public setCookie(cname: any , cvalue: any , exdays: any ) { // 设置Cookie的值  名称  值  过期时间
    const d: any = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000 ));
    const expires = 'expires=' + d.toGMTString();
    document.cookie = cname + '=' + cvalue + ';' + expires;
    const name = this.getCookie(cvalue);
    if ( name !== '' ) {
      alert(`Cookie保存成功  username:${name}`);
      return;
    }
    alert('Cookie保存失败');
  }

  public getCookie(cname: any) {  // 获取Cookie的值 输入名称
    let sname = cname;
    if ( !sname || sname === '' || sname === undefined ) {
      sname = prompt('请输入姓名');
    }
    const name: any = sname;
    const ca: any = document.cookie.split('=')[1].toString();
    if ( name === ca ) {
      alert('Welcome again : ' + ca);
      return ca;
    }
    alert('没有找到。。。');
    return '';
  }

  public checkCookie() { // 总逻辑
    const p = prompt('请输入姓名');
    const username = this.getCookie(p);
    if (username === '') {
      this.setCookie('username' , p , 365 );
    }
  }

  public deleteCookie(uname: any) { // 删除
    const p = prompt('请输入姓名 将为您查找');
    const name = this.getCookie(p);
    if (name === '') {
      alert('Cookie中不包含此字段');
      return;
    }
  }

}
</script>
