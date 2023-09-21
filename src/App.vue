<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {};
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<template>
  <div class="global-container">
    <!--* Nav Menù // Jumbotron // Video Player -->
    <AppHeader></AppHeader>
    <!--* CONTENTS (go to AppMain for explainations ) -->
    <AppMain></AppMain>
    <!--* Footer -->
    <AppFooter></AppFooter>
  </div>
</template>

<style lang="scss">
.global-container {
  width: 100%;
}
//global css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
</style>
