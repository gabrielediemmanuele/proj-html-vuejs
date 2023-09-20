<script>
export default {
  data() {
    return {
      counters: [
        {
          totalValue: 700 + "+",
          description: "Project done",
        },
        {
          totalValue: 250 + "+",
          description: "Happy Clients",
        },
        {
          totalValue: 25 + "+",
          description: "Team Members",
        },
        {
          totalValue: 12 + "+",
          description: "Year on the market",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="anidio-quick">
    <div class="facts-cont">
      <div class="title-cont"><h1>Anidio Quick Facts</h1></div>
      <div class="counters-cont">
        <div class="counter" v-for="counter in counters">
          <span>{{ counter.totalValue }}</span>
          <span>{{ counter.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//font and variables scss
@import url("https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Share+Tech+Mono&display=swap");
@import "../../partials/variables";

.anidio-quick {
  width: 100%;
  height: 500px;
  border: 2px solid yellow;
  //background elements settings
  background-image: url(../../assets/shape-bottom.png),
    url(../../assets/shape-top.png), url(../../assets/globe.png),
    url(../../assets/counter-bg.png);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-position: bottom, top, center, center;
  background-size: auto, auto, contain, cover;

  display: flex;
  align-items: center;
  justify-content: center;

  //facts cont
  .facts-cont {
    width: 80%;
    height: 300px;
    border: 2px dashed lime;

    .title-cont h1 {
      font-family: "Bagel Fat One", cursive;
      font-family: "Share Tech Mono", monospace;
      color: $white_color;
      border: 1px dashed orange;
      text-align: center;
      padding: 20px 0;
      font-size: 40px;
    }
    .counters-cont {
      width: 100%;
      border: 1px dashed yellow;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .counter {
        width: calc(100% / 4);
        height: 100%;
        padding: 60px;
        border: 1px dashed red;
        display: flex;
        flex-direction: column;
        align-items: center;

        span:first-child {
          color: $white_color;
          font-size: 60px;
          font-family: "Bagel Fat One", cursive;
          font-family: "Share Tech Mono", monospace;
          letter-spacing: 3px;
        }
        span:last-child {
          color: $orange_color;
        }
      }
    }
  }
}
</style>
