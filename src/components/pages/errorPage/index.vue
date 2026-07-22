<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => router.replace({ name: 'Home' })
</script>

<template>
  <section
    class="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col justify-center px-6 py-24"
  >
    <p v-reveal class="font-mono text-xs uppercase tracking-[0.22em] text-accent">
      Error
    </p>

    <h1
      v-reveal="{ delay: 60 }"
      class="mt-6 font-display text-7xl font-bold tracking-[-0.03em] text-ink sm:text-8xl"
    >
      404
    </h1>

    <p
      v-reveal="{ delay: 120 }"
      class="mt-6 max-w-xl text-lg leading-relaxed text-muted"
    >
      This page does not exist.
    </p>

    <div v-reveal="{ delay: 200 }" class="mt-10">
      <button
        type="button"
        class="group inline-flex items-center gap-2 border border-line-strong px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent hover:text-accent active:scale-[0.98]"
        @click="goHome"
      >
        <span class="transition-transform group-hover:-translate-x-0.5">&#8592;</span>
        Back home
      </button>
    </div>
  </section>
</template>
