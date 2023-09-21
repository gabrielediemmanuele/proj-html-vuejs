<script>
// imports
import navComponent from "./sub-components-header/navComponent.vue";
import jumbotronBlock from "./sub-components-header/jumbotronBlock.vue";
import videoPlayer from "./sub-components-header/videoPlayer.vue";

// exports
export default {
  data() {
    return {};
  },
  //components
  components: {
    navComponent,
    jumboCont: jumbotronBlock,
    videoPlayer,
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
    <videoPlayer></videoPlayer>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 1000px;
  background-image: url(../../src/assets/Banner-bg-def.png);
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
