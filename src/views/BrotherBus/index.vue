<template>
  <div class="busCom">
    <HelloWorld/>
    <div class="d1">BUS 兄弟间传值</div>
    <Comones/><br>
    <Comtows/>
  </div>
</template>

<style scoped lang="scss">
.d1 {
  font-size: 5vmin;
  font-weight: bold;
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Comones from './component/Comone.vue';
import Comtows from './component/Comtow.vue';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  name: 'busCom',
  components: {
    Comtows,
    Comones,
    HelloWorld,
  },
})

export default class BusCom extends Vue {

}
</script>
