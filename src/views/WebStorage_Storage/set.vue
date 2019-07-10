<template>
  <div class="Web">
    <HelloWorld/>
    <router-link to="/get"  target="_blank">新建页面</router-link>
    <div @click="s()">另一种方法</div>
    <div v-show="sss">
       <div id="d1">{{newVal}}</div>
      <div class="div">
        <input type="text" id="data" v-model="modl">
        <button @click="saveItem()">保存</button>
      </div>
    </div>
    <div v-show="!sss">
      <Storage/>
      <input type="text" id="data" placeholder="input date to save" v-model="modl" @keyup.enter="save"> 
      <button @click="save">简单方法</button>
    </div>
   
  </div>
</template>

<style scoped lang="scss">


div {
  margin: 3vmin auto;
  min-width: 10vmin; 
  cursor: pointer;
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  name: 'Web',
  components: {
    HelloWorld,
  },
})

export default class WebStorageStorage extends Vue {
  public modl: string = '';
  public newVal: any = '';
  public resetSetItem: any;
  public sss = false;
  public created() {
    // 监听变化
    window.addEventListener('setItem', ()=> { //触发事件  获取值
	    this.newVal = sessionStorage.getItem('watchStorage');
    })

  }

  public saveItem() {  // 调用自定义事件  存值
    this.resetSetItem('watchStorage', this.modl);
  }

  public save() {
    localStorage.setItem('data', this.modl);
    // this.newVal = localStorage.getItem('data');
  }

  public s() {
    this.sss = !this.sss;
  }
 
}
</script>
