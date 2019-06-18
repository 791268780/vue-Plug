<template>
  <div class="Comone">
      <div>A兄弟组件</div>
     <button @click="sendB">点击传值给B</button>
     <div>{{b}}</div>
  </div>
</template>

<style scoped lang="scss">
.Comone {
  display: flex;
  min-width: 200px;
  padding: 0vmin 2vmin;
  border-radius: 3vmin;
  background: #e8e8e8;
  color: #fff;
  font-weight: bold;
  font-size: 4vmin;
  height: 15vmin;
  line-height: 15vmin;
}

button {
  margin: 0 5vmin;
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import Bus from '@/mixins/bus';

@Component({
  name: 'C',
  components: {
  },
})

export default class Comones extends Vue {
  public a = 0; // 传给b组件的值
  public b: any = 0; // 接收b组件的值

  public created() {
    Bus.$on('sendB', (val: any) => {
      this.b = '接收到兄弟组件B传来的值：' + val;
    });
  }

  public sendB() {
    Bus.$emit('sendA', ++this.a );
  }
}
</script>
