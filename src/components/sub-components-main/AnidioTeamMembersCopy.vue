<script>
export default {
  data() {
    return {
      cardMembers: [
        {
          memberImage: "../../../public/img/team1.png",
          memberName: "Robert Coleman",
          memberRole: "Owner & Creative Director",
        },
        {
          memberImage: "../../../public/img/team2.png",
          memberName: "Don Woods",
          memberRole: "Administator",
        },
        {
          memberImage: "../../../public/img/team4.png",
          memberName: "Thomas Nash",
          memberRole: "2d animator & Compositor",
        },
        /* {
          memberImage: "../../../public/img/profilepers.png",
          memberName: "Gabriele D.E",
          memberRole: "Senior Dev. Full Stack",
        }, */
      ],
      activeCard: 0,
      autoplay: false,
    };
  },
  //slider methods
  methods: {
    goNext() {
      if (this.activeCard < this.cardMembers.length - 1) {
        this.activeCard++;
      } else {
        this.activeCard = 0;
      }
    },
    goPrev() {
      if (this.activeCard > 0) {
        this.activeCard--;
      } else {
        this.activeCard = this.cardMembers.length - 1;
      }
    },

    clickCard(index) {
      this.activeCard = index;
      console.log(index);
    },

    autoPlay() {
      if (!this.autoplay) {
        this.autoplay = setInterval(() => {
          this.goNext();
        }, 3000);
      }
    },

    autoStop() {
      if (this.autoplay) {
        clearInterval(this.autoplay);
        this.autoplay = true;
      }
    },
  },

  created() {
    this.autoPlay();
  },
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
    <div class="cards-cont" @mouseOver="autoStop()" @mouseLeave="autoPlay()">
      <!--!  card cont  -->
      <div
        class="card"
        v-for="(member, index) in cardMembers"
        :key="memberName"
        @click="clickCard(index)"
        :class="index == activeCard ? 'active' : ''"
      >
        <img :src="member.memberImage" :alt="member.memberName" />
        <h3>{{ member.memberName }}</h3>
        <span>{{ member.memberRole }}</span>
        <!--todo Icons  -->
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
      <div class="arrow-bubble" @click="goPrev()">
        <font-awesome-icon icon="fa-solid fa-arrow-left" size="xl" />
      </div>
      <span class="slider-dot" v-for="index in cardMembers"></span>

      <div class="arrow-bubble" @click="goNext()">
        <font-awesome-icon icon="fa-solid fa-arrow-right" size="xl" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Share+Tech+Mono&display=swap");
@import "../../partials/variables";
.team-members {
  width: 100%;
  background-image: url(../../assets/shape.png), url(../../assets/shape2.png);
  background-repeat: no-repeat, no-repeat;
  background-size: 50%, 50%;
  background-position: left, right;
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

.active {
  transform: scale(1.1);
  box-shadow: 0px 0px 6px 2px gray;
  transition: 1s;
}
.orangeDot {
  background-color: $orange_color;
}
//cards
.cards-cont {
  width: 80%;
  padding: 30px 0;

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
    border-radius: 20px;
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
      width: 100%;
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

        &:hover {
          color: $white_color;
          background-color: $orange_color;
          border: none;
        }
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
    color: #ababab;

    &:hover {
      border: none;
      color: white;
      background-color: $orange_color;
    }
  }
}
</style>
