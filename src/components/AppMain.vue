<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {};
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <main class="main-container"></main>
</template>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  margin: 0 auto;
  height: 800px;
  background-image: url(../../src/assets/smarttwo.png);
  background-repeat: no-repeat;
  background-position: left -300px top 0px;
  background-size: contain;
  border: 2px dashed red;
}
</style>
