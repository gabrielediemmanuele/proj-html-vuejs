<script>
//import
import LoveAnimation from "../components/sub-components-main/LoveAnimation.vue";
import AnidioQuick from "../components/sub-components-main/AnidioQuick.vue";
import OurWorks from "../components/sub-components-main/OurWorks.vue";
import OurProcess from "../components/sub-components-main/OurProcess.vue";
//export
export default {
  data() {
    return {};
  },

  components: {
    LoveAnimation,
    AnidioQuick,
    OurWorks,
    OurProcess,
  },
};
</script>

<template>
  <main class="main-container">
    <LoveAnimation></LoveAnimation>
    <AnidioQuick></AnidioQuick>
    <OurWorks></OurWorks>
    <OurProcess></OurProcess>
  </main>
</template>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  margin: 0 auto;
  border: 3px dashed rgb(119, 0, 255);
}
</style>
