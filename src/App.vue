<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import url("./assets/css/index.scss");
#app {
  width: 100%;
  height: 100vh;
}

* {
  padding: 0;
  margin: 0;
}
</style>
