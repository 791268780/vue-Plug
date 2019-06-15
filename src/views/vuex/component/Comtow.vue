<template>
  <div class="Comtow">
     <div>
         从State中获取到数据：{{ count }}
     </div>
  </div>
</template>

<style scoped lang="scss">
.Comtow {
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
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  name: 'Comtow',
  components: {

  },
})

export default class Comtow extends Vue {
  public get count() {
    return this.$store.state.iNumberCount;          // 获取  state中的数据
  }
}
</script>
