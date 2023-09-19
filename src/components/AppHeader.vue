<script>
import navComponent from "./sub-components-header/navComponent.vue";
export default {
  data() {
    return {};
  },

  components: {
    navComponent,
  },
};
</script>

<template>
  <!--* header container  -->
  <header>
    <navComponent></navComponent>
    <!--* jumbo container -->
    <div class="jumbotron"></div>
    <!--* videoplayer container-->
    <div class="video-player"></div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 1000px;
  border: 1px dashed green;
  background-image: url(../../src/assets/Banner-bg-def.png);
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
