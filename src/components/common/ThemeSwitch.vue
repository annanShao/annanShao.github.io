<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const theme = ref(localStorage.getItem('theme') === 'light' ? 'light' : 'dark')

const setTheme = (next: string) => {
  if (next === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('theme', next)
  theme.value = next
}

onMounted(() => {
  // Dark-dominant brand site: default to dark unless the user opted into light.
  setTheme(localStorage.getItem('theme') === 'light' ? 'light' : 'dark')
})

const toggle = () => setTheme(theme.value === 'dark' ? 'light' : 'dark')

const isDark = computed(() => theme.value === 'dark')
</script>

<template>
  <button
    type="button"
    class="flex items-center text-muted transition hover:scale-110 hover:text-ink"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    @click="toggle"
  >
    <Transition name="turn-translate" mode="out-in">
      <!-- Moon -->
      <svg
        v-if="isDark"
        key="moon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <!-- Sun -->
      <svg
        v-else
        key="sun"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="4.2" />
        <path
          d="M12 2.6v2.4M12 19v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.6 12H5M19 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7"
        />
      </svg>
    </Transition>
  </button>
</template>

<style scoped>
.turn-translate-enter-active,
.turn-translate-leave-active {
  transition: all 0.3s ease-out;
}

.turn-translate-enter-from {
  opacity: 0;
  transform-origin: center;
  transform: rotate(60deg) scale(0.6);
}

.turn-translate-leave-to {
  opacity: 0;
  transform-origin: center;
  transform: rotate(-60deg) scale(0.6);
}
</style>
