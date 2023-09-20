<script>
export default {
  props: {
    slogan: String,
    title: String,
    spanning: String,
    sloganText: String,
    titleText: String,
    spanningText: String,
  },
};
</script>

<template>
  <div class="jumbotron">
    <span :class="slogan">Imagine, Create, Experience</span>
    <h1 :class="title">
      We Animate <br />
      Whit Ninja-Like Precision
    </h1>
    <span :class="spanning"
      >We are a character-driven animation studio striving to make high-quality
      animations.</span
    >
  </div>
</template>

<style lang="scss" scoped></style>
