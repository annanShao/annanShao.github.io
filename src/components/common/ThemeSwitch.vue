<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import SunIcon from '../../assets/sun.svg?component';
import NightIcon from '../../assets/night.svg?component';

let theme = ref(localStorage.getItem('theme') ?? 'light');

const setTheme = (changeTheme: string) => {
  if (changeTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('theme', changeTheme);
  theme.value = changeTheme;
}

onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
})

const handleChangeTheme = () => {
  if (theme.value === 'dark') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

const themeIsDark = computed(() => theme.value === 'dark')
</script>

<template>
  <div class="cursor-pointer" @click="handleChangeTheme">
    <Transition name="turn-translate" mode="out-in">
      <NightIcon v-if="themeIsDark" />
      <SunIcon v-else />
    </Transition>
  </div>
</template>

<style>
.turn-translate-enter-active,
.turn-translate-leave-active {
  transition: all 0.3s ease-out;
}

.turn-translate-enter-from {
  opacity: 0;
  transform-origin: 10%;
  transform: rotate(60deg);
}

.turn-translate-leave-to {
  opacity: 0;
  transform-origin: 10%;
  transform: rotate(-60deg);
}
</style>