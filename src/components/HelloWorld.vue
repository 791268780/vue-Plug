<template>
  <div class="hello">
      <router-link to="/">返回首页</router-link>  
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})

export default class HelloWorld extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  display: block;
  width: 100vw;
  padding: 5vmin 3vmin;
  background: linear-gradient( #efb6d5 , #ea16b3 , #9816ea , #1692ea , #16ea75  , #5eea16 , #c0ea16 ,  #ea7816 , #ea2016);
  color: #fff;
  font-size: 3vmin;
  font-weight: bold;
  margin-bottom: 2vmin;
}
</style>
