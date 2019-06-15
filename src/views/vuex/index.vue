<template>
  <div>
    <HelloWorld/>
    <div class="vuex-index">
      <Comone/>
      <Comtow/>
    </div>
    <div>
      <button @click="count(1)">将数据加1存入store</button>
      <button @click="count(-1)">将数据减1存入store</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.vuex-index {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 20vmin;
}

button {
  margin: 2vmin;
  padding: 2vmin 2vmin;
  border-radius: 2vmin;
  font-weight: bold;
  font-size: 3.5vmin;
  outline: 0;
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Comone from './component/Comone.vue';
import Comtow from './component/Comtow.vue';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  name: 'vuex-index',
  components: {
    Comone,
    Comtow,
    HelloWorld,
  },
})

export default class VuexIndex extends Vue {
  public i = 0;
  public count(iNumber: any) {
    this.i += iNumber;
    this.$store.dispatch('CountNumberActions' , this.i);
  }
}
</script>
