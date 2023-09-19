<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {};
  },

  components: {
    AppHeader,
    AppMain,
  },
};
</script>

<template>
  <div class="global-container">
    <AppHeader></AppHeader>
    <AppMain></AppMain>
  </div>
</template>

<style lang="scss">
.global-container {
  width: 100%;
  border: 2px dashed red;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
</style>
