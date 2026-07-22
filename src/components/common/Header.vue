<script setup lang="ts">
import { GithubFilled } from '@ant-design/icons-vue'
import ThemeSwitch from '@/components/common/ThemeSwitch.vue'

const openGithub = () => window.open('https://github.com/annanShao', '_blank')
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-line backdrop-blur-xl"
    style="background-color: var(--header-bg)"
  >
    <div
      class="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-6"
    >
      <router-link
        to="/"
        class="group flex items-center gap-2 transition-opacity hover:opacity-80"
      >
        <span class="h-[7px] w-[7px] bg-accent" aria-hidden="true"></span>
        <span class="font-display text-lg font-bold tracking-tight text-ink">
          San
        </span>
      </router-link>

      <nav class="flex min-w-0 shrink items-center gap-2.5 sm:gap-5">
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/blog" class="nav-link">Blog</router-link>

        <span class="h-4 w-px bg-line" aria-hidden="true"></span>

        <button
          type="button"
          aria-label="GitHub"
          class="flex items-center text-muted transition hover:scale-110 hover:text-ink"
          @click="openGithub"
        >
          <GithubFilled class="text-[19px]" />
        </button>
        <ThemeSwitch />
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  position: relative;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.8rem;
  letter-spacing: 0.02em;
  color: var(--muted);
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--ink);
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -6px;
  height: 1.5px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.24s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  transform: scaleX(1);
}

.nav-link.router-link-active {
  color: var(--ink);
}
</style>
