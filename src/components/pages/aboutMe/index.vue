<script setup lang="ts">
const capabilities = [
  'Multi-model AI vision reads a meal photo and estimates what was eaten.',
  'Provider fallback and hedged retries keep recognition reliable under load.',
  'Cross-platform React Native client, designed and shipped end to end, solo.',
]

const pipeline = ['Meal photo', 'Multi-model vision', 'Structured log']

const tech = ['React Native', 'Multi-model AI', 'Provider fallback', 'Hedged retries']

const links = [
  { label: 'GitHub', href: 'https://github.com/annanShao' },
  { label: 'Email', href: 'mailto:thunder.god.shao@gmail.com' },
]
</script>

<template>
  <div class="mx-auto max-w-4xl px-6 py-24 sm:py-28">
    <!-- Intro: one tight paragraph, no resume -->
    <section v-reveal>
      <p class="font-mono text-xs uppercase tracking-[0.22em] text-accent">
        About
      </p>
      <p
        class="mt-8 max-w-2xl break-words font-display text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl md:text-3xl"
      >
        I build across the stack — from <span class="text-accent">AI-native</span>
        apps to the systems underneath them.
      </p>
      <p class="mt-6 max-w-2xl leading-relaxed text-muted">
        Annan Shao — San. An AI engineer and generalist: AI-native apps and
        agent systems, full-stack TypeScript, Rust when it has to be fast, and
        Edge AI on real hardware. Founder of Titan AI — one label, not the whole
        story.
      </p>
    </section>

    <!-- TitanLog: one highlight among many, told deeply -->
    <section v-reveal class="mt-28">
      <div class="flex items-center gap-3">
        <span class="h-[7px] w-[7px] bg-accent" aria-hidden="true"></span>
        <p class="font-mono text-xs uppercase tracking-[0.22em] text-muted">
          One of the things I've built
        </p>
      </div>

      <div class="mt-6 flex flex-wrap items-end justify-between gap-4">
        <h1
          class="font-display text-5xl font-bold tracking-[-0.03em] text-ink sm:text-6xl"
        >
          TitanLog
        </h1>
      </div>

      <p class="mt-5 max-w-2xl text-lg leading-relaxed text-ink">
        An AI-native app that turns a single meal photo into a structured food
        and fitness log.
      </p>

      <p class="mt-2 font-mono text-xs text-faint">Solo-built · Founder</p>

      <!-- Product panel -->
      <div class="mt-10 border border-line bg-surface">
        <ul class="space-y-5 p-8 sm:p-10">
          <li
            v-for="(cap, i) in capabilities"
            :key="cap"
            v-reveal="{ delay: i * 70 }"
            class="flex gap-4"
          >
            <span class="mt-1 font-mono text-xs text-accent">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <span class="leading-relaxed text-muted">{{ cap }}</span>
          </li>
        </ul>

        <!-- Recognition pipeline -->
        <div class="border-t border-line p-8 sm:p-10">
          <p class="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
            Recognition pipeline
          </p>
          <div
            class="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <template v-for="(step, i) in pipeline" :key="step">
              <div
                class="flex-1 border border-line-strong px-4 py-3 text-center font-mono text-sm text-ink"
              >
                {{ step }}
              </div>
              <span
                v-if="i < pipeline.length - 1"
                class="self-center text-accent"
                aria-hidden="true"
              >
                <span class="inline-block rotate-90 sm:rotate-0">&#8594;</span>
              </span>
            </template>
          </div>
          <p class="mt-4 font-mono text-xs text-faint">
            provider fallback · hedged retries
          </p>
        </div>
      </div>

      <!-- Tech tags -->
      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="item in tech"
          :key="item"
          class="border border-line px-3 py-1.5 font-mono text-xs text-muted"
        >
          {{ item }}
        </span>
      </div>
    </section>

    <!-- Minimal links, not a contact table -->
    <footer v-reveal class="mt-28 border-t border-line pt-8">
      <div class="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="text-muted transition hover:text-accent"
        >
          {{ link.label }}
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.status-badge {
  border: 1px solid var(--line-strong);
  color: var(--accent);
  padding: 0.25rem 0.7rem;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  white-space: nowrap;
}
</style>
