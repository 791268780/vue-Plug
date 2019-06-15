<template>
  <div class="Comone">
     从State中获取到数据：{{ count }}
  </div>
</template>

<style scoped lang="scss">
.Comone {
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
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  name: 'Comone',
  components: {

  },
})

export default class Comone extends Vue {
  public get count() {
    return this.$store.state.iNumberCount;          // 获取  state中的数据
  }
}
</script>
