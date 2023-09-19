<script>
export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <!--* header container  -->
  <header>
    <!--* navigation menu -->
    <nav></nav>
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
}
</style>
