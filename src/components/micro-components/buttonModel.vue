<script>
export default {
  data() {
    return {};
  },
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
