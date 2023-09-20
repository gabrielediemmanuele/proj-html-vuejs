<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <!--* Background container  -->
  <div class="create-worlds">
    <!--*  contents  -->
    <div class="contents-cont">
      <span class="slogan">Imagine, Create, Experience</span>
      <h1 class="title">We Animate Whit Ninja-Like Precision</h1>
      <span class="spanning"
        >We are a character-driven animation studio striving to make
        high-quality animations.</span
      >
    </div>
    <!--*submit container-->
    <div class="submit-cont">
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter here your E-mail..."
      />
      <button type="button">Submit</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//font and variables scss
@import url("https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Share+Tech+Mono&display=swap");
@import "../../partials/variables";

//main container
.create-worlds {
  width: 100%;
  height: 500px;
  border: 2px solid yellow;
  //background elements settings
  background-image: url(../../assets/shape-bottom.png),
    url(../../assets/shape-top.png), url(../../assets/preloader.png);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: bottom, top, center;
  background-size: auto, auto, cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  //contents-container
  .contents-cont {
    width: 50%;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    border: 1px dashed orange;
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

  //submit customs
  .submit-cont {
    width: 60%;
    position: relative;

    input {
      width: 100%;
      padding: 10px 20px;
      border: none;
      border-radius: 20px;
      /* outline: none; */
    }

    button {
      position: absolute;
      top: 3px;
      right: 5px;
      padding: 7px 15px;
      z-index: 2;
      border-radius: 25px;
      border: none;
      cursor: pointer;
      color: $purple_color;
      background-color: $pink_color;
    }

    button:hover {
      background-color: $purple_color;
      color: $pink_color;
    }
  }
}
</style>
