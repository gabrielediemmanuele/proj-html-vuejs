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
  <div class="button-cont">
    <jumboButton class="button-start">Start a Project</jumboButton>
    <jumboButton class="button-portfolio">Portfolio</jumboButton>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Share+Tech+Mono&display=swap");
.jumbotron {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  border: 1px dashed orange;
  .slogan {
    font-size: 15px;
    color: #ff7a1f;
    margin: 5px 0;
  }
  .title {
    color: white;
    font-size: 50px;
    font-family: "Bagel Fat One", cursive;
    font-family: "Share Tech Mono", monospace;
    margin: 10px 0;
  }
  .spanning {
    font-size: 15px;
    color: white;
    margin: 10px 0;
  }
}
.button-cont {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  border: 1px dashed rgb(140, 180, 41);

  //buttons
  .button-start {
    background-color: #ffdfed;
    margin: 0 10px;
    //hover
    &:hover {
      background-color: transparent;
      border: none;
      box-shadow: 0 0 6px 2px #ffdfed;
      color: white;
    }
  }

  .button-portfolio {
    background-color: transparent;
    border: none;
    box-shadow: 0px 0px 3px 1px #ffdfed;
    color: white;
    margin: 0 10px;
    //hover
    &:hover {
      background-color: #ff7a1f;
      border: none;
      box-shadow: 0 0 6px 2px #ff7a1f;
      color: rgb(43, 0, 99);
      margin: 0 10px;
    }
  }
}
</style>
<!-- font-family: 'Bagel Fat One', cursive;
font-family: 'Share Tech Mono', monospace; -->
