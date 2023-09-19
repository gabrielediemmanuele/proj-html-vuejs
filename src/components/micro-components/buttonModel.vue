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
  <button class="button" type="button"><slot>Button</slot></button>
</template>

<style lang="scss" scoped>
.button {
  padding: 8px 20px;
  border-radius: 20px;
  border: none;
}
</style>
