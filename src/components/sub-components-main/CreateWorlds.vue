<script>
export default {
  data() {
    return {
      emailText: "",
    };
  },
  emits: ["submit"],
};
</script>

<template>
  <!--* Background container  -->
  <div class="create-worlds">
    <!--*  contents  -->
    <div class="contents-cont">
      <span class="slogan">We Create New Worlds! </span>
      <h1 class="title">Want Tips On Your Storytelling?</h1>
      <span class="spanning"
        >Join our newsletter for tips how to elevate your brand through
        storytelling.</span
      >
    </div>
    <!--*submit container-->
    <div class="submit-cont">
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter here your E-mail..."
        v-model="emailText"
        v-on:keyup.enter="$emit('submit', emailText)"
      />
      <button type="button" @click="$emit('submit', emailText)">Submit</button>
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
    .slogan {
      font-size: 18px;
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
      font-weight: 500;
      letter-spacing: 5px;
      line-height: 25px;
    }
  }

  //submit customs
  .submit-cont {
    width: 60%;
    position: relative;

    input {
      width: 100%;
      padding: 20px 20px;
      border: none;
      border-radius: 30px;
      outline: none;
    }

    button {
      position: absolute;
      top: 9px;
      right: 7px;
      padding: 11px 17px;
      z-index: 2;
      border-radius: 25px;
      border: none;
      cursor: pointer;
      color: #311852;
      background-color: #ffdfed;
    }

    button:hover {
      background-color: $purple_color;
      color: $pink_color;
    }
  }
}
</style>
