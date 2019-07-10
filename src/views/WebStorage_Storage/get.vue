<template>
  <div>
    {{s}}
  </div>
</template>

<style scoped lang="scss">

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Storage',
  components: {
  },
})

export default class Storage extends Vue {
  public s: any = 'storage 事件监听 缓存改变';
  public created() {
     window.addEventListener('storage', this.showStorage);
  }

   public showStorage(e: any) {
    if (!e) {
      e = window.event;
    }

    this.s = localStorage.getItem('data');
  }
}
</script>

