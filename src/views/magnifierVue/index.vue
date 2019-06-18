<template>
  <div class="magnifier">
    <HelloWorld />
    <div class="d">
      <div class="d4" @mouseover="sbyl" @mouseout="sbyc" @mousemove="sbyd($event)"></div>
      <div class="d1" ></div>
      <div class="d2" v-show="toggleHide" :style="`background-position: ${pLeft}px ${pTOP}px`"></div>
      <div class="d3" v-show="toggleHide" :style="`top:${top}px;left:${left}px`"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.d {
  position: relative;
  width: 500px;
  height: 600px;
  margin: 0 auto;
}
.d1 {
  width: 100%;
  height: 100%;
  background: url('./img/liu.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.d2 {
  width: 100%;
  height: 100%;
  background: url('./img/liu.jpg');
  background-size: 2000px 2400px;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 110%;
}

.d3 {
  width: 125px;
  height: 150px;
  background: rgba(0,0,0,.2);
  position: absolute;
}

.d4 {
  width: 100%;
  height: 600px;
  position: absolute;
  top: 0;
  z-index: 10;
}


</style>


<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  name: 'Magnifier',
  components: {
    HelloWorld,
  },
})

export default class Magnifier extends Vue {
  public toggleHide = false;
  public top = 0;
  public left = 0;
  public pTOP = 0;
  public pLeft = 0;

  public sbyl() { // 鼠标移入执行
    this.toggleHide = true;
  }

  public sbyc() { // 鼠标移出执行
    this.toggleHide = false;
  }

  public sbyd(e: any) { // 鼠标移动是执行
    let x = e.offsetX;
    let y = e.offsetY;
    if (  y > 600 / 8 * 7  ) { // 放大4倍 600 元素高度 500 元素宽度
      y = 600 / 8 * 7;
    } else if (  y < (600 / 8)  ) {
      y = 600 / 8;
    }
    if (  x < (500 / 8)  ) {
      x = 500 / 8 ;
    } else if ( x > (500 / 8 * 7 )  ) {
      x = 500 / 8 * 7;
    }
    y = y - 150 / 2;
    x = x - 125 / 2;
    this.top = y;
    this.pTOP = -y * 4;
    this.pLeft = -x * 4 ;
    this.left = x;
  }
}
</script>
