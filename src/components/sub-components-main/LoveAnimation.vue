<script>
export default {
  data() {
    return {
      cards: [
        {
          cardImage: "../../../public/img/smart1.png",
          cardTitle: "3D modeling",
          text: "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep. We'll drill deep to deliver above and beyond your expectations",
        },
        {
          cardImage: "../../../public/img/smart2.png",
          cardTitle: "Collaboration",
          text: "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep. We'll drill deep to deliver above and beyond your expectations",
        },
        {
          cardImage: "../../../public/img/smart3.png",
          cardTitle: "Creativity",
          text: "We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep. We'll drill deep to deliver above and beyond your expectations",
        },
      ],
    };
  },
  components: {},
};
</script>

<template>
  <!--* TEXT CONTAINER  -->
  <div class="text-container">
    <span class="slogan">Our Love For Animation</span>
    <h1 class="title">We're Storytelling Experts With Creative Smarts</h1>
    <span class="spanning"
      >Our culture inspires the creative and innovative spirit found throudhout
      our Studio. We breathe life into new idea!</span
    >
  </div>

  <!--* CARD CONTAINER-->
  <div class="cards-cont">
    <div class="card" v-for="card in cards">
      <img :src="card.cardImage" :alt="card.cardTitle" />
      <h4>{{ card.cardTitle }}</h4>
      <p>{{ card.text }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Share+Tech+Mono&display=swap");
@import "../../partials/variables";

/* text container style  */
.text-container {
  width: 50%;
  margin: 20px auto;
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
  }
}

/*cards container style*/
.cards-cont {
  width: 60%;
  border: 2px dashed greenyellow;
  margin: 0px 120px 0px auto;
  padding: 10px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.card {
  width: calc(80% / 3);
  height: 310px;
  padding: 10px;
  border: 2px dashed red;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 50px;
  }

  h3 {
  }
}
</style>
