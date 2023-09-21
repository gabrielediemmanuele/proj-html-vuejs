<script>
//import BackToTop
import BackToTop from "vue-backtotop";

export default {
  data() {
    return {
      navList: [
        "Home",
        "About Us",
        "Portfolio",
        "Our Process",
        "Pricing",
        "Blog",
        "Contact",
      ],
    };
  },
  components: { BackToTop },
};
</script>

<template>
  <footer>
    <div class="footer-cont">
      <!--* Logo And Navigation menù -->
      <div class="nav-cont">
        <img src="../assets/footer-logo.png" alt="Anidio-Logo" />
        <ul>
          <li v-for="elementList in navList">{{ elementList }}</li>
        </ul>
      </div>

      <!--* Copyright and Socials Icons -->
      <div class="bottom-cont">
        <span
          >Copyright &copy; 2023 <a href="#">Softvius.</a> All rights reserved.
          Made by C0deWhisper.</span
        >
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
      </div>
      <back-to-top @scrolled="myFunction">
        <div class="arrow-up">
          <button type="button" class="btn btn-info btn-to-top">
            <font-awesome-icon icon="fa-solid fa-arrow-up" />
          </button>
        </div>
      </back-to-top>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../partials/variables";

.footer-cont {
  width: 100%;
  padding-top: 40px;
  position: relative;

  //ArrowUp
  .arrow-up {
    width: 25px;
    height: 25px;
    padding: 15px 100px 15px 10px;
    color: white;
    background-color: $purple_color;
    border-radius: 10px 0 0 10px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    position: absolute;
    right: -35px;
    bottom: 40px;

    //btn
    .btn {
      color: $white_color;
      background-color: transparent;
      border: none;
    }

    &:hover {
      background-color: $orange-color;
      color: $white_color;
      cursor: pointer;
      border: $orange-color;
    }
  }
}
//NAV CONTAINER CONTENTS
.nav-cont {
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;

    li {
      margin: 0 5px 0 5px;
      color: black;
      font-size: 12px;
      //hover
      &:hover {
        color: $orange_color;
        cursor: pointer;
      }
    }
  }
}

//COPYRIGHT AND ICONS
.bottom-cont {
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //social icons
  .icons-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .single-icon {
      width: 45px;
      height: 45px;
      margin: 0 5px;
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

//span
span {
  font-size: 12px;
  font-weight: 500;

  a {
    text-decoration: none;
  }
}
</style>
