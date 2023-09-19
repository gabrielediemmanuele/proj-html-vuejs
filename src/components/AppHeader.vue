<script>
// imports
import navComponent from "./sub-components-header/navComponent.vue";
import jumbotronBlock from "./sub-components-header/jumbotronBlock.vue";

// exports
export default {
  data() {
    return {};
  },
  components: {
    navComponent,
    jumboCont: jumbotronBlock,
  },
};
</script>

<template>
  <!--* header container  -->
  <header>
    <!--* Navigation bar-->
    <navComponent></navComponent>
    <!--* jumbo container -->
    <jumboCont></jumboCont>
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
