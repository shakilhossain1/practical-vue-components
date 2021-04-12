<template>
  <h2 class="text-[green] text-3xl ml-[50px]">Hellow world</h2>
  <h2 class="text-red-500">Hellow world</h2>
  <AppButton href="#hello" theme="primary" class="ml-5"></AppButton>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
import AppButton from "./components/AppButton.vue";

export default {
  components: {
    AppButton,
  },
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
