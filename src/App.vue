<template>
  <the-header-mobile v-if="isMobile" :navItems="navItems"></the-header-mobile>
  <the-header-desc v-else :navItems="navItems"></the-header-desc>
</template>

<script setup>
import TheHeaderMobile from './components/TheHeaderMobile.vue';
import TheHeaderDesc from './components/TheHeaderDesc.vue';
import { reactive, watchEffect } from 'vue';

import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';

const store = useStore();
const navItems = computed(() => {
  return store.getters['getItems'];
});

const state = reactive({
  isMobile: window.innerWidth <= 768,
});
watchEffect(() => {
  state.isMobile = window.innerWidth <= 768;
});

const isMobile = state.isMobile;
console.log(isMobile);
</script>

<style scoped></style>
