<script>
export default {
  data() {
    return {
      partnersLogos: [
        "../../assets/sponsor1.png",
        "../../assets/sponsor2.png",
        "../../assets/sponsor3.png",
        "../../assets/sponsor4.png",
        "../../assets/sponsor5.png",
        "../../assets/sponsor6.png",
      ],
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="partners-cont">
    <!--* text container -->
    <div class="text-container">
      <span class="slogan">Anidio Magic Team Members</span>
      <h1 class="title">Let Us Animate Your Project</h1>
      <span class="spanning"
        >We create new worlds! Let's collaborate and create engaging, effective,
        award-winning animations.</span
      >
    </div>
    <!--* partners logo container -->
    <div class="partners-cards">
      <div class="card" v-for="(partner, index) in partnersLogos" :key="index">
        <img src="../../../public/img/" alt="" />
        <img :src="partner.partnersLogos" alt="logos" />
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
  border: 2px dashed rgb(0, 255, 153);
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

//partners
.partners-cards {
  width: 80%;
  margin: 0 auto;
  border: 1px dashed yellow;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .card {
    width: calc(100% / 6);
    height: 100%;
    padding: 10px;
    border: 1px dashed red;
  }
}
</style>
