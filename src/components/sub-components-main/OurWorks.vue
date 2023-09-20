<script>
// import MyComponent from "./components/MyComponent.vue";

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
  <div class="our-works">
    <!--* text container -->
    <div class="text-container">
      <span class="slogan">Our Works</span>
      <h1 class="title">Featured Productions</h1>
      <span class="spanning"
        >Here's just a small sample of some of those projects that we're quite
        proid of. <br />
        If you're looking for something specific feel free to get in contact
        with us.</span
      >
    </div>
    <!--* images cont-->
    <div class="images-cont"></div>
    <div class="button-cont"></div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Share+Tech+Mono&display=swap");
@import "../../partials/variables";

//general css
.our-works {
  width: 100%;
  height: 500px;
  border: 2px dashed rgb(0, 255, 153);
}
// text container css
.text-container {
  width: 80%;
  margin: 30px auto;
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
    line-height: 25px;
  }
}

//images css
</style>
