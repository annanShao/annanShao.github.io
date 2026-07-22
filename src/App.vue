<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/common/Header.vue'
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-bg text-ink">
    <div class="grid-bg" aria-hidden="true"></div>
    <div class="glow" aria-hidden="true"></div>
    <Header />
    <main class="relative z-10">
      <router-view />
    </main>
  </div>
</template>
