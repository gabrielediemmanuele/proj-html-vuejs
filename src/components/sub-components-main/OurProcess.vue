<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      cards: [
        {
          cardImage: "../../../public/img/process1.png",
          cardTitle: "Pre-Production",
          text: "We'll take your idea and create a technical script which consist of action notes and animation description.",
        },
        {
          cardImage: "../../../public/img/process2.png",
          cardTitle: "Scripting",
          text: "We'll take your idea and create a technical script which consist of action notes and animation description.",
        },
        {
          cardImage: "../../../public/img/process1.png",
          cardTitle: "Creativity",
          text: "We'll take your idea and create a technical script which consist of action notes and animation description.",
        },
        {
          cardImage: "../../../public/img/process2.png",
          cardTitle: "Story-Telling",
          text: "We'll take your idea and create a technical script which consist of action notes and animation description.",
        },
      ],
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="our-process">
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
//imports style
@import url("https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Share+Tech+Mono&display=swap");
@import "../../partials/variables";

//style
.our-process {
  width: 100%;
  border: 2px dashed rgb(0, 255, 153);
}
// text container style
.text-container {
  width: 80%;
  margin: 30px auto 0 auto;
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

//cards
.cards-cont {
  width: 60%;
  border: 2px dashed greenyellow;
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
  border: 2px dashed red;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;

  img {
    width: 50px;
    height: 50px;
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
