<script>
export default {
  data() {
    return {
      //Smarth Cicle to generate cards -> look at .48
      cards: [
        {
          cardImage: "../../../public/img/smart1.png",
          cardTitle: "3D modeling",
          text: "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep. We'll drill deep to deliver above and beyond your expectations",
          bgGradient:
            "linear-gradient( 3deg, rgb(255, 228, 208) 0%, rgba(255, 255, 255))",
        },
        {
          cardImage: "../../../public/img/smart2.png",
          cardTitle: "Collaboration",
          text: "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep. We'll drill deep to deliver above and beyond your expectations",
          bgGradient:
            "linear-gradient( 3deg, rgb(238, 235, 252, 1) 0%, rgba(255, 255, 255, 1))",
        },
        {
          cardImage: "../../../public/img/smart3.png",
          cardTitle: "Creativity",
          text: "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep. We'll drill deep to deliver above and beyond your expectations",
          bgGradient:
            "linear-gradient( 3deg, rgb(253,232,234,1) 0%, rgba(255,255,255,1))",
        },
      ],
    };
  },
  components: {},
};
</script>

<template>
  <div class="love-animation">
    <!--* TEXT CONTAINER  -->
    <div class="text-container">
      <span class="slogan">Our Love For Animation</span>
      <h1 class="title">We're Storytelling Experts With Creative Smarts</h1>
      <span class="spanning"
        >Our culture inspires the creative and innovative spirit found
        throudhout our Studio. We breathe life into new idea!</span
      >
    </div>

    <!--* CARD CONTAINER-->
    <div class="cards-cont">
      <div
        class="card"
        v-for="(card, index) in cards"
        :key="index"
        :style="{ 'background-image': card.bgGradient }"
      >
        <img :src="card.cardImage" :alt="card.cardTitle" />
        <h3>{{ card.cardTitle }}</h3>
        <p>{{ card.text }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Share+Tech+Mono&display=swap");
@import "../../partials/variables";
//bg-image
.love-animation {
  background-image: url(../../src/assets/smarttwo.png),
    url(../../assets/smart4.png);
  background-repeat: no-repeat, no-repeat;
  background-position: left -340px top -160px, right 5px bottom 10px;
  background-size: 1000px, 10%;
}
/* text container style  */
.text-container {
  width: 50%;
  margin: auto;
  padding: 20px;
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
  }
}

/*cards container style*/
.cards-cont {
  width: 60%;
  margin: 0px 120px 0px auto;
  padding: 10px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
//card style
.card {
  width: calc(80% / 3);
  padding: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;

  &:hover {
    box-shadow: 0px 0px 6px 1px gray;
    transform: scale(1.1);
    transition: 1s;
    cursor: pointer;
  }

  img {
    width: 50px;
    margin-bottom: 15px;
  }

  h3 {
    margin-bottom: 15px;
  }

  p {
    font-size: 14px;
    text-align: center;
    margin-bottom: 15px;
    line-height: 25px;
    font-weight: lighter;
  }
}
</style>
