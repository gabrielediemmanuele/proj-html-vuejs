<script>
export default {
  props: {
    neutralButton: String,
    btText: String,
  },
};
</script>

<template>
  <button class="neutralButton" :class="neutralButton" type="button">
    {{ btText }}
  </button>
</template>

<style lang="scss" scoped>
.neutralButton {
  padding: 8px 20px;
  border-radius: 20px;
  border: none;
}
</style>
