<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="team-members">
    <!--* text container -->
    <div class="text-container">
      <span class="slogan">Anidio Magic Team Members</span>
      <h1 class="title">Let Us Animate Your Project</h1>
      <span class="spanning"
        >We create new worlds! Let's collaborate and create engaging, effective,
        award-winning animations.</span
      >
    </div>
    <!--* members cards cont cont-->
    <div class="cards-cont">
      <!--!  card cont  -->
      <div class="card">
        <img src="../../assets/team1.png" alt="" />
        <h3>Robert Coleman</h3>
        <span>Owner & Creative Director</span>
        <div class="icons-cont">
          <div class="single-icon">
            <font-awesome-icon icon="fa-brands fa-facebook" />
          </div>
          <div class="single-icon">
            <font-awesome-icon icon="fa-brands fa-twitter" />
          </div>
          <div class="single-icon">
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </div>
        </div>
        <div class="card-bg"></div>
      </div>
      <!--!  card cont  -->
      <div class="card">
        <img src="../../assets/team1.png" alt="" />
        <h3>Robert Coleman</h3>
        <span>Owner & Creative Director</span>
        <div class="icons-cont">
          <div class="single-icon">
            <font-awesome-icon icon="fa-brands fa-facebook" />
          </div>
          <div class="single-icon">
            <font-awesome-icon icon="fa-brands fa-twitter" />
          </div>
          <div class="single-icon">
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </div>
        </div>
        <div class="card-bg"></div>
      </div>
      <!--!  card cont  -->
      <div class="card">
        <img src="../../assets/team1.png" alt="" />
        <h3>Robert Coleman</h3>
        <span>Owner & Creative Director</span>
        <div class="icons-cont">
          <div class="single-icon">
            <font-awesome-icon icon="fa-brands fa-facebook" />
          </div>
          <div class="single-icon">
            <font-awesome-icon icon="fa-brands fa-twitter" />
          </div>
          <div class="single-icon">
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </div>
        </div>
        <div class="card-bg"></div>
      </div>
    </div>
    <!--* slider arrows-->
    <div class="arrows-cont">
      <div class="arrow-bubble">
        <font-awesome-icon
          icon="fa-solid fa-arrow-left"
          size="xl"
          style="color: #ababab"
        />
      </div>
      <span class="slider-dot"></span>
      <span class="slider-dot"></span>
      <span class="slider-dot"></span>
      <span class="slider-dot"></span>
      <div class="arrow-bubble">
        <font-awesome-icon
          icon="fa-solid fa-arrow-right"
          size="xl"
          style="color: #ababab"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Share+Tech+Mono&display=swap");
@import "../../partials/variables";
.team-members {
  width: 100%;
  border: 2px dashed rgb(0, 255, 153);
}
// text container css
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
  width: 80%;
  height: 400px;
  border: 2px dashed skyblue;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .card {
    width: calc(100% / 3);
    padding: 10px;
    margin: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 2px dashed black;
    position: relative;

    //card > background
    .card-bg {
      width: 100%;
      height: 70%;
      position: absolute;
      bottom: 0;
      background-color: #ffe5dd;
      border-radius: 20px;
    }
    img {
      margin-bottom: 20px;
      z-index: 1;
    }
    h3 {
      margin: 0;
      z-index: 1;
      color: $purple_color;
    }
    span {
      margin: 10px 0;
      z-index: 1;
      color: $purple_color;
      font-weight: 400;
    }

    .icons-cont {
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      margin-top: 30px;

      .single-icon {
        width: 45px;
        height: 45px;
        margin: 0 10px;
        color: $purple_color;
        font-size: 20px;
        border: 1px solid $purple_color;
        background-color: $white_color;
        padding: 10px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

//arrows
.arrows-cont {
  width: 80%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgb(255, 119, 0);
  padding: 20px;

  .slider-dot {
    width: 10px;
    height: 10px;
    background-color: rgb(184, 184, 184);
    border-radius: 50%;
    margin: 0 10px;
  }

  .arrow-bubble {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid lightgray;
    margin: 15px;
    border-radius: 50%;
  }
}
</style>
