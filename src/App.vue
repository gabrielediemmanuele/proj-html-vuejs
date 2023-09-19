<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {};
  },

  components: {
    AppHeader,
  },
};
</script>

<template>
  <div class="global-container">
    <AppHeader></AppHeader>
  </div>
</template>

<style lang="scss">
.global-container {
  width: 100%;
  height: 100%;
  border: 2px dashed red;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
