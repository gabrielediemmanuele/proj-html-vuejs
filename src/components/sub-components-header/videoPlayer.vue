<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <!--* Video Player  -->
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
    z-index: 2;
    .play-icon {
      color: white;
      font-size: 30px;
    }
    //hover
    &:hover {
      background-color: rgb(255, 255, 255);

      .play-icon {
        color: purple;
      }
    }
  }
}
</style>
