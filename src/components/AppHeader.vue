<script>
import DefaultContainer from "./micro-components/DefaultContainer.vue";
export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: {
    DefaultContainer,
  },
};
</script>

<template>
  <!--* header container  -->
  <header>
    <!--* navigation menu -->
    <nav>
      <DefaultContainer class="nav-cont">
        <div>logo</div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <button></button>
      </DefaultContainer>
    </nav>
    <!--* jumbo container -->
    <div class="jumbotron">
      <DefaultContainer> </DefaultContainer>
    </div>
    <!--* videoplayer container-->
    <div class="video-player">
      <DefaultContainer> </DefaultContainer>
    </div>
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

  nav {
    .nav-cont {
      display: flex;
      height: 50px;
    }
  }
}
</style>
