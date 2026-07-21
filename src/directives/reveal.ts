import type { Directive, DirectiveBinding } from 'vue'

interface RevealOptions {
  delay?: number
}

/**
 * v-reveal — gentle scroll-entry reveal.
 * Elements fade + translate up once they enter the viewport.
 * Usage: <div v-reveal> or <div v-reveal="{ delay: 80 }">
 */
export const vReveal: Directive<HTMLElement, RevealOptions | undefined> = {
  mounted(el: HTMLElement, binding: DirectiveBinding<RevealOptions | undefined>) {
    const delay = binding.value?.delay ?? 0
    el.style.setProperty('--reveal-delay', `${delay}ms`)
    el.classList.add('reveal-init')

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('reveal-in')
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('reveal-in')
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
  },
}
