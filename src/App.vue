<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import Header from '@/components/common/Header.vue';

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
})
</script>

<template>
  <Header></Header>
  <router-view />
</template>

<style>
body {
  padding: 0;
  box-sizing: border-box;
  font-weight: 100;
  transition: 0.2s ease-in;
  letter-spacing: 1px;
}

.dark body {
  background-color: #232435;
}

.dark * {
  color: white;
}
</style>
