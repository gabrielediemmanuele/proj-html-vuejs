<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="anidio-quick"></div>
</template>

<style lang="scss" scoped>
//font and variables scss
@import url("https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Share+Tech+Mono&display=swap");
@import "../../partials/variables";

.anidio-quick {
  width: 100%;
  height: 500px;
  border: 2px solid yellow;
  //background elements settings
  background-image: url(../../assets/shape-bottom.png),
    url(../../assets/shape-top.png), url(../../assets/globe.png),
    url(../../assets/counter-bg.png);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-position: bottom, top, center, center;
  background-size: auto, auto, contain, cover;
}
</style>
