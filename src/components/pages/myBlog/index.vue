<script setup lang="ts">
// Honest empty state — no invented articles.
const openGithub = () => window.open('https://github.com/annanShao', '_blank')
</script>

<template>
  <section
    class="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-4xl flex-col justify-center px-5 py-24 sm:px-6"
  >
    <p v-reveal class="font-mono text-xs uppercase tracking-[0.22em] text-accent">
      Writing
    </p>

    <h1
      v-reveal="{ delay: 60 }"
      class="mt-6 break-words font-display text-4xl font-bold tracking-[-0.03em] text-ink sm:text-6xl"
    >
      Nothing here yet.
    </h1>

    <p
      v-reveal="{ delay: 120 }"
      class="mt-6 max-w-xl text-lg leading-relaxed text-muted"
    >
      This space is being built. Until it lands, my work lives on GitHub.
    </p>

    <div v-reveal="{ delay: 200 }" class="mt-10">
      <button
        type="button"
        class="group inline-flex items-center gap-2 bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition hover:opacity-90 active:scale-[0.98]"
        @click="openGithub"
      >
        Find me on GitHub
        <span class="transition-transform group-hover:translate-x-0.5">-&gt;</span>
      </button>
    </div>
  </section>
</template>
