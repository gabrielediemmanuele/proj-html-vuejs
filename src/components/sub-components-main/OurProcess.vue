<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      cards: [
        {
          cardImage: "../../../public/img/process2.png",
          cardTitle: "Pre-Production",
          text: "We'll take your idea and create a technical script which consist of action notes and animation description.",
          flagg: "1",
        },
        {
          cardImage: "../../../public/img/process1.png",
          cardTitle: "Scripting",
          text: "We'll take your idea and create a technical script which consist of action notes and animation description.",
          flagg: "4",
        },
        /* {
          cardImage: "../../../public/img/process1.png",
          cardTitle: "Creativity",
          text: "We'll take your idea and create a technical script which consist of action notes and animation description.",
          flagg: '2',
        }, */
        /* {
          cardImage: "../../../public/img/process2.png",
          cardTitle: "Story-Telling",
          text: "We'll take your idea and create a technical script which consist of action notes and animation description.",
          flagg: '3',
        }, */
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
    <div class="support-cont">
      <div class="image-cont"></div>
      <div class="elements-cont">
        <!--* text container -->
        <div class="text-container">
          <span class="slogan">Our Process</span>
          <h1 class="title">Our Process for Your Animation Production</h1>
          <span class="spanning"
            >We have an effective process for working on animation.</span
          >
        </div>
        <!--* CARD CONTAINER -->
        <div class="cards-cont">
          <div
            class="card"
            v-for="(card, index) in cards"
            :key="index"
            :style="{ 'background-image': card.bgGradient }"
          >
            <div class="flagg">{{ card.flagg }}</div>
            <div class="icon-cont">
              <img :src="card.cardImage" :alt="card.cardTitle" />
            </div>
            <h2>{{ card.cardTitle }}</h2>
            <p>{{ card.text }}</p>
          </div>
        </div>

        <div class="arrows-cont">
          <div class="arrow-bubble">
            <font-awesome-icon
              icon="fa-solid fa-arrow-left"
              size="xl"
              style="color: #ababab"
            />
          </div>
          <div class="arrow-bubble">
            <font-awesome-icon
              icon="fa-solid fa-arrow-right"
              size="xl"
              style="color: #ababab"
            />
          </div>
        </div>
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
  border: 2px dashed rgb(121, 74, 215);

  background-image: url(../../src/assets/process-thumb.png),
    url(../../assets/smart4.png);
  background-repeat: no-repeat, no-repeat;
  background-position: left -100px top 30px, right 5px bottom 10px;
  background-size: 50%, 10%;

  .support-cont {
    width: 80%;
    margin: 0 auto;
    display: flex;
  }
  //image-container
  .image-cont {
    width: 50%;
    height: auto;
    border: 2px dashed greenyellow;
  }
  //elements container (text , cards)
  .elements-cont {
    width: 50%;
    border: 2px dashed magenta;

    // text container style
    .text-container {
      width: 100%;
      margin: 30px auto 0 auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;
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
      width: 100%;
      border: 2px dashed greenyellow;
      margin: 0px 120px 0px auto;
      padding: 10px;

      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    //card style
    .card {
      width: calc(100% / 2);
      padding: 25px 20px;
      margin: 10px;

      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 20px;
      position: relative;
      box-shadow: 1px 1px 4px 2px gray;

      &:hover {
        transform: scale(1.1);
        transition: 1s;
      }
      //flagg
      .flagg {
        width: 40px;
        height: 95px;
        text-align: center;
        line-height: 140px;
        border-radius: 0 0 20px 20px;
        background-color: #ddd1ed;
        color: #92879f;
        position: absolute;
        top: 0;
        right: 20px;
      }
      .icon-cont {
        background-color: #fef5f0;
        padding: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin-bottom: 25px;
        img {
          width: 50px;
          height: 50px;
        }
      }

      h2 {
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
  }

  //arrows container
  .arrows-cont {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 20px;
    .arrow-bubble {
      display: flex;
      align-items: center;
      padding: 10px;
      border: 1px solid lightgray;
      margin: 15px;
      border-radius: 50%;
    }
  }
}
</style>
