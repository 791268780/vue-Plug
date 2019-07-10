<template>
  <div>
    <HelloWorld/>
    <div class="home">
      <div class="left" ref="navwrap">
        <ul>
          <li v-for="(item , i) in left" :key="i" @click="select(i,$event)" ref="li1" :class="{'background':currentIndex===i}">{{item}}</li>
        </ul>
      </div>
      <div class="right" ref="wrapper">
        <ul>
          <li v-for="(item , i) in right" :key="i" ref="li2">
            <div>{{item}}</div>
            <div class="d1">{{i}}</div>
          </li>
        </ul>
      </div>
    </div>
    <br>
    <br>
    <div>
      index传来的参数：{{sss}}
    </div>
  </div>
  
</template>

<style scoped lang="scss">
.background {
  background: red;
  color: #fff;
}

body,ul,li,div {
  margin: 0 ;
  padding:0 ;
}

.d1 {
  width: 100%;
  height: 200px;
}

ul {
  width: 100%;
  li {
    width: 100%;
    padding:40px 0;
    background: #e8e8e8;
    margin-bottom: 3px;
    cursor: pointer;
  }
}

.home {
  display: flex;
  justify-content: left;
  width: 700px;
  margin: 0 auto;
}

.left {
  border: 1px solid red;
  height: 500px;
  width: 200px;
  overflow: hidden;
}

.right {
  width: 500px;
  height: 500px;
  border: 1px solid blue;
  overflow: hidden;
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BScroll from 'better-scroll';
import HelloWorld from '@/components/HelloWorld.vue';


@Component({
  name: 'Betterscroll',
  components: {
    HelloWorld,
  },
})

export default class Betterscroll extends Vue {
  public left = [ '青菜' , '水果' , '酒水' , '零食', '烟' , '包包' , '上衣' , '裤子' , '鞋子'];
  public right = [ '青菜区' , '水果区' , '酒水区' , '零食区', '烟区' , '包包区' , '上衣区' , '裤子区' , '鞋子区'];
  public currentIndex: any =  0; // 当前显示的下标
  public listHeight: any = [];
  public scrollY: any = 0;
  public menuIndexChange: any = true;
  public navwrapScroll: any;
  public wrapperScroll: any;

  public sss = '';
  public created() {
    this.$nextTick(() => {
      // 3 在这个函数中调用以防内容还未加载完就执行，获取不到元素的高度导致无法滑动
      this._initScroll();
      this.height();
    });

  this.sss = this.$route.params.id;

  }

  public _initScroll() {
    // 注意此处是 this.$refs.xxx
    const navwrap: any = this.$refs.navwrap;
    const wrapper: any = this.$refs.wrapper ;
    this.navwrapScroll = new BScroll( navwrap , {
      click: true,
    });

    this.wrapperScroll = new BScroll( wrapper , {
      click: true, // better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件，
      // 我们会给派发的 event 参数加一个私有属性 _constructed，值为 true。
      probeType: 3, // 这个属性设置之后可以监听得到了
    });

    // 监听滚动事件
    this.wrapperScroll.on('scroll', (pos: any) => {
      // 当允许滚动并滚动的y轴小于0
      if (this.menuIndexChange && pos.y <= 0) {
        this.scrollY = Math.abs(Math.round(pos.y));  // 滚动距离
        // 循环每一个模块距离顶部的高度
        for (let i = 0; i < this.listHeight.length; i++) {
          const height1 = this.listHeight[i];
          const height2 = this.listHeight[i + 1];
          if (
            !height2 ||
            (this.scrollY >= height1 && this.scrollY < height2)
          ) {
            this._followScroll(i); // 左侧动画移动
            this.currentIndex = i;
            return;
          }
        }
      }
    });
  }

  public height() { // 获取右侧每个模块的高度
    const wrap2: any = this.$refs.li2;
    let height: any = 0;
    this.listHeight.push(height);
    for (const i of wrap2) {
      const item: any = i;
      height += item.clientHeight;
      this.listHeight.push(height);
    }
  }


    // 点击左侧滚动
  public select(index: any, event: any) {
    // PC页面时,点击不会被 better-scroll阻止事件,初始化,给 better-scroll派发事件,使移动端拥有点击事件,因此切换到PC端时,点击事件会被执行两次,
    if (!event._constructed) {
      return;
    }

    this.currentIndex = index;  // 改变点击的当前样式
    this.menuIndexChange = false;  // 禁用右侧滚动  防止左右两侧都改变index  解决运动时listenScroll依然监听的bug

    // 左侧网上偏移100
    this._followScroll(index); // 左侧动画移动

    // 右侧滚到响应位置
    const wrap2: any = this.$refs.li2;
    const el: any = wrap2[index];
    this.wrapperScroll.scrollToElement(el, 300);

    // 右侧滚动结束后在允许动画
    this.wrapperScroll.on( 'scrollEnd', () => {
      this.menuIndexChange = true;
    });
  }

  // 左侧网上偏移
  public _followScroll(index: any) {
    const wrap1: any = this.$refs.li1;
    const e: any = wrap1[index];
    this.navwrapScroll.scrollToElement( e , 300, 0, -100); // 往上偏移100
  }

}
</script>
