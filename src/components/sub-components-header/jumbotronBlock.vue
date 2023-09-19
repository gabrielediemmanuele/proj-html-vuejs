<script>
export default {
  data() {
    return {
      title: "Hello world",
    };
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
</style>
<!-- font-family: 'Bagel Fat One', cursive;
font-family: 'Share Tech Mono', monospace; -->
