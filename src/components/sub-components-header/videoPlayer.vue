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
  <div class="player-cont">
    <div class="play-cont">
      <font-awesome-icon class="play-icon" icon="fa-solid fa-play" />
    </div>

    <img src="../../assets/middle.png" alt="videoplayer image" />
  </div>
</template>

<style lang="scss" scoped>
.player-cont {
  width: 80%;
  margin: 30px auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed rgb(242, 222, 184);
  position: relative;

  .play-cont {
    width: 60px;
    height: 60px;
    padding: 45px;
    border-radius: 50%;
    background-color: purple;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    .play-icon {
      color: white;
      font-size: 30px;
    }
  }
  .play-cont:hover {
    background-color: rgb(255, 255, 255);
    .play-icon {
      color: purple;
    }
  }
}
</style>
