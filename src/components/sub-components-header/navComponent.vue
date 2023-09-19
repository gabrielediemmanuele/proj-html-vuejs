<script>
import buttonModel from "../micro-components/buttonModel.vue";

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

  components: {
    "v-button": buttonModel,
  },
};
</script>

<!--todo Navigation Menù template  -->
<template>
  <nav class="nav-cont">
    <img src="../../assets/logo.png" alt="Anidio-Logo" />
    <ul>
      <li v-for="elementList in navList">{{ elementList }}</li>
    </ul>
    <v-button>Get a Quote</v-button>
  </nav>
</template>

<style lang="scss" scoped>
@import "../../";
.nav-cont {
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px dashed orange;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    margin: 0 30px 0 auto;
    padding: 0;

    li {
      margin: 0 10px 0 10px;
      color: white;
      //hover
      &:hover {
        margin: 0 10px 0 10px;
        color: #ff7a1f;
      }
    }
  }
}
.button {
  background-color: #ffdfed;
  &:hover {
    background-color: transparent;
    border: none;
    box-shadow: 0 0 6px 2px #ffdfed;
    color: white;
  }
}
</style>
