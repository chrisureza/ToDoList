<template>
  <div class="more-options-menu text-right">
    <b-dropdown no-caret menu-class="menu-box-container" right>
      <template v-slot:button-content>
        <b-icon-three-dots></b-icon-three-dots>
      </template>
      <b-dropdown-item
        v-for="(option, optionIndex) in filteredOptions"
        :key="`option-${optionIndex}`"
        @click="option.onClick"
        >{{ option.text }}</b-dropdown-item
      >
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "MoreOptionsMenu",
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  computed: {
    filteredOptions() {
      return this.options.filter(option => !option.hideOption);
    }
  }
};
</script>

<style lang="scss">
.more-options-menu {
  position: absolute;
  right: 0;
  top: 0;
  .dropdown-toggle {
    background: none;
    border: none;
    font-size: 26px;
    height: 32px;
    padding: 0 8px;

    svg {
      position: absolute;
      top: 0px;
      right: 6px;
      height: 32px;
    }
  }

  .btn-secondary:not(:disabled):not(.disabled).active,
  .btn-secondary:not(:disabled):not(.disabled):active,
  .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background: none;
    border: none;
  }

  .menu-box-container {
    top: -28px !important;
    position: absolute;
    right: 58px !important;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08), 0 3px 6px rgba(0, 0, 0, 0.13);
  }
}
</style>
