<template>
  <div id="app">
    <keep-alive > <!--在被keep-alive包含的组件/路由中，会多出两个生命周期的钩子:activated 与 deactivated-->
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<style lang="scss">
@import 'reset-css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
