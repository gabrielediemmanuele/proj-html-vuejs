<script>
import buttonPropMod from "../micro-components/buttonPropMod.vue";

export default {
  data() {
    return {
      text: "See Our Work",
      buttonStyle: "button-style",
    };
  },

  components: {
    buttonPropMod,
  },
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
    <div class="images-cont">
      <img src="../../assets/work1.png" alt="art" />
      <img src="../../assets/work2.png" alt="art" />
      <img src="../../assets/work3.png" alt="art" />
      <img src="../../assets/work4.png" alt="art" />
    </div>
    <div class="button-cont">
      <buttonPropMod
        :neutralButton="buttonStyle"
        :btText="text"
      ></buttonPropMod>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Share+Tech+Mono&display=swap");
@import "../../partials/variables";

//general css
.our-works {
  width: 100%;
}
// text container css
.text-container {
  width: 80%;
  margin: 30px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
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
.images-cont {
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;

  img {
    width: calc(100% / 2 - 40px);
    margin: 10px;
    box-shadow: 1px 1px 4px 1px rgb(82, 82, 82);
    border-radius: 20px;
  }
  img:hover {
    transform: scale(1.1);
    transition: 1s;
    margin: 15px;
  }
}

//button
.button-cont {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.neutralButton {
  padding: 12px 30px;
  border-radius: 20px;
  border: none;
  font-size: 20px;
}
.button-style {
  background-color: $white_color;
  margin: 0 10px;
  box-shadow: 0 0 6px 2px $graypurple_color;
  color: $graypurple_color;
  //hover
  &:hover {
    background-color: $white_color;
    border: none;
    box-shadow: 0 0 6px 2px $purple_color;
    color: $purple_color;
  }
}
</style>
