<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<template>
  <!--* TEXT CONTAINER  -->
  <div class="text-container">
    <span class="slogan">Our Love For Animation</span>
    <h1 class="title">We're Storytelling Experts With Creative Smarts</h1>
    <span class="spanning"
      >Our culture inspires the creative and innovative spirit found throudhout
      our Studio. We breathe life into new idea!</span
    >
  </div>

  <!--* CARD CONTAINER-->
  <div class="cards-cont">
    <div class="card" v-for="card in cards"></div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Share+Tech+Mono&display=swap");
@import "../../partials/variables";

/* text container style  */
.text-container {
  width: 50%;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  border: 1px dashed orange;
  .slogan {
    font-size: 15px;
    color: $azure_color;
    margin: 5px 0;
  }
  .title {
    color: $purple_color;
    font-size: 50px;
    font-family: "Bagel Fat One", cursive;
    font-family: "Share Tech Mono", monospace;
    margin: 10px 0;
  }
  .spanning {
    font-size: 15px;
    color: $graypurple_color;
    margin: 10px 0;
  }
}

/*cards container style*/
.cards-cont {
  width: 80%;
  height: 320px;
  border: 1px dashed greenyellow;
}
</style>
