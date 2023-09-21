<script>
import buttonModel from "../micro-components/buttonModel.vue";

export default {
  data() {
    return {};
  },
  components: {
    jumboButton: buttonModel,
  },
};
</script>

<template>
  <!--* Jumbotron -->
  <div class="jumbotron">
    <span class="slogan">Imagine, Create, Experience</span>
    <h1 class="title">
      We Animate <br />
      Whit Ninja-Like Precision
    </h1>
    <span class="spanning"
      >We are a character-driven animation studio striving to make high-quality
      animations.</span
    >
  </div>
  <!--* button -->
  <div class="button-cont">
    <jumboButton class="button-start">Start a Project</jumboButton>
    <jumboButton class="button-portfolio">Portfolio</jumboButton>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Share+Tech+Mono&display=swap");
@import "../../partials/variables";

//Jumbotron
.jumbotron {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  .slogan {
    font-size: 15px;
    color: $orange_color;
    margin: 5px 0;
  }
  .title {
    color: $white_color;
    font-size: 50px;
    font-family: "Bagel Fat One", cursive;
    font-family: "Share Tech Mono", monospace;
    margin: 10px 0;
  }
  .spanning {
    font-size: 15px;
    color: $white_color;
    margin: 10px 0;
  }
}
//Button
.button-cont {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;

  //buttons
  .button-start {
    background-color: $pink_color;
    margin: 0 10px;
    //hover
    &:hover {
      background-color: transparent;
      border: none;
      box-shadow: 0 0 6px 2px $pink_color;
      color: $white_color;
      cursor: pointer;
    }
  }

  .button-portfolio {
    background-color: transparent;
    border: none;
    box-shadow: 0px 0px 3px 1px $pink_color;
    color: $white_color;
    margin: 0 10px;
    //hover
    &:hover {
      background-color: $orange_color;
      border: none;
      box-shadow: 0 0 6px 2px $orange_color;
      color: rgb(43, 0, 99);
      margin: 0 10px;
      cursor: pointer;
    }
  }
}
</style>
<!-- font-family: 'Bagel Fat One', cursive;
font-family: 'Share Tech Mono', monospace; -->
