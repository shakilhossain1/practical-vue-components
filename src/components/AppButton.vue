<template>
  <a
    :href="href"
    @click.prevent="clicked"
    class="btn"
    :class="[themes[theme], sizes[size]]"
    >Click Here</a
  >
</template>

<script>
export default {
  data() {
    return {
      themes: {
        primary: "btn-primary",
        success: "btn-success",
      },
      sizes: {
        normal: "",
        large: "text-2xl",
        small: "text-xs",
      },
    };
  },

  props: {
    theme: {
      required: false,
      type: String,
      default: "primary",
    },
    size: {
      required: false,
      type: String,
      defalut: "normal",
    },
    href: {
      required: false,
      default: "#",
    },
  },
  methods: {
    clicked(e) {
      this.$emit("click", e);
    },
  },
};
</script>
