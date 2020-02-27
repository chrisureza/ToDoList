<template>
  <div>
    <b-form-input v-model="inputText" :placeholder="placeholder"></b-form-input>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    placeholder: {
      type: String,
      default: () => ""
    },
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      inputText: this.text
    };
  },
  watch: {
    inputText(value) {
      this.$emit("update-text", value);
    }
  }
};
</script>
