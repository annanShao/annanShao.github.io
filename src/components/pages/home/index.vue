<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goProduct = () => router.push({ name: 'About' })
const openGithub = () => window.open('https://github.com/annanShao', '_blank')

// Curated cross-domain signals: AI/Agent + full-stack + systems + Edge AI.
const stack = [
  'LangGraph',
  'Multi-Agent',
  'RAG',
  'TypeScript',
  'React Native',
  'Node.js',
  'Rust',
  'Jetson',
]
</script>

<template>
  <section
    class="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl flex-col justify-center px-5 py-24 sm:px-6"
  >
    <p
      v-reveal
      class="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent sm:text-xs sm:tracking-[0.22em]"
    >
      AI Engineer · Builder
    </p>

    <h1
      v-reveal="{ delay: 60 }"
      class="mt-6 break-words font-display text-5xl font-bold leading-[0.95] tracking-[-0.03em] text-ink sm:text-7xl lg:text-8xl"
    >
      Annan Shao
    </h1>

    <p v-reveal="{ delay: 120 }" class="mt-5 font-mono text-sm text-muted">
      邵安楠 · San
    </p>

    <p
      v-reveal="{ delay: 200 }"
      class="mt-10 max-w-2xl break-words font-display text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl md:text-3xl"
    >
      Building <span class="text-accent">AI-native</span> apps
      <span class="text-faint">&amp;</span> agent systems.
    </p>

    <p
      v-reveal="{ delay: 260 }"
      class="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base"
    >
      Comfortable across agents, full-stack, Rust systems, and on-device AI —
      a generalist who likes to build.
    </p>

    <div
      v-reveal="{ delay: 320 }"
      class="mt-10 flex max-w-full flex-wrap gap-2"
    >
      <span
        v-for="item in stack"
        :key="item"
        class="whitespace-nowrap border border-line px-3 py-1.5 font-mono text-[11px] text-muted sm:text-xs"
      >
        {{ item }}
      </span>
    </div>

    <div
      v-reveal="{ delay: 400 }"
      class="mt-12 flex flex-wrap items-center gap-3"
    >
      <button
        type="button"
        class="group flex items-center gap-2 bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition hover:opacity-90 active:scale-[0.98]"
        @click="goProduct"
      >
        View TitanLog
        <span class="transition-transform group-hover:translate-x-0.5">-&gt;</span>
      </button>
      <button
        type="button"
        class="border border-line-strong px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent hover:text-accent active:scale-[0.98]"
        @click="openGithub"
      >
        GitHub
      </button>
    </div>
  </section>
</template>
