<script>
export default {
  data() {
    return {
      partnersLogos: [
        "../../../public/img/sponsor1.png",
        "../../../public/img/sponsor2.png",
        "../../../public/img/sponsor3.png",
        "../../../public/img/sponsor4.png",
        "../../../public/img/sponsor5.png",
        "../../../public/img/sponsor6.png",
      ],
    };
  },
};
</script>

<template>
  <div class="partners-cont">
    <!--* text container -->
    <div class="text-container">
      <span class="slogan">Why Anidio studio?</span>
      <h1 class="title">We Love Our CLients</h1>
      <span class="spanning"
        >We are trusted throughout adland and have a wealth of recommendations
        from start-ups to renowned global brands.</span
      >
    </div>
    <!--* partners logo container -->
    <div class="partners-cards">
      <div class="card" v-for="logo in partnersLogos">
        <img :src="logo" alt="logos" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//imports fonts and variables
@import url("https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Share+Tech+Mono&display=swap");
@import "../../partials/variables";
.partners-cont {
  width: 100%;
}
// text container css
.text-container {
  width: 80%;
  margin: 30px auto 0 auto;
  padding: 15px 0;
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
//partners
.partners-cards {
  width: 80%;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .card {
    width: calc(100% / 6);
    height: 100%;
    padding: 5px;
    margin: 5px;

    img {
      width: 100%;
      box-shadow: 0px 0px 3px 0px gray;
      border-radius: 10px;
    }
    img:hover {
      transform: scale(1.1);
      transition: 500ms;
      margin: 5px;
    }
  }
}
</style>
