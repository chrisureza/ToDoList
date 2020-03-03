<template>
  <b-button :class="`button ${customClass}`" @click="onClick">
    {{ text }}
  </b-button>
</template>

<script>
export default {
  name: "Button",
  props: {
    customClass: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/colors";

.button {
  background: $main-color;
  border: none;
}

.card-button {
  background: $spring-wood;
  border-color: $mercury;
  color: $downriver;
  margin-left: 6px;
  font-size: 14px;
  padding: 6px;

  &--completed {
  }

  &--missed {
  }
}
</style>
