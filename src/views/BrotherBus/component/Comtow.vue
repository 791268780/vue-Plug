<template>
  <div class="Comtow">
     <div>B兄弟组件</div>
     <button @click="sendA">点击传值给A</button>

     <div>{{a}}</div>
  </div>
</template>

<style scoped lang="scss">
.Comtow {
  display: flex;
  min-width: 200px;
  padding: 0vmin 2vmin;
  height: 15vmin;
  line-height: 15vmin;
  border-radius: 3vmin;
  background: #e8e8e8;
  color: #fff;
  font-weight: bold;
  font-size: 4vmin;
}

button {
  margin: 0 5vmin;
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Bus from '@/mixins/bus'; // 新的vue实列

@Component({
  name: 'w',
  components: {

  },
})

export default class Comtows extends Vue {
  public a: any = 0; // 接收a组件的值
  public b: any = 0;  // 传给a组件的值
  public created() {
    Bus.$on('sendA' , (val: any) => {
      console.log(val);
      this.a = '接收到兄弟A传来的值：' + val;
    });
  }

  public sendA() {
    Bus.$emit('sendB', ++this.b);
  }

}
</script>
