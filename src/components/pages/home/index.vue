<script lang="ts" setup>
import { router } from '@/routers';

const menu = [
  {
    key: "about",
    label: "About",
    click: () => {
      router.push({name: 'About'});
    },
  },
  {
    key: "blog",
    label: "Blog",
    click: () => {
      router.push({name: 'Blog'});
    },
  },
];
</script>

<template>
  <div class="w-full absolute h-full flex flex-col justify-center items-center">
    <a-avatar :size="128">
      <template #icon>
        <img src="@/assets/avatar.png" loading="lazy" alt="" />
      </template>
    </a-avatar>
    <div class="flex mt-4">
      <div v-for="item in menu" :key="item.key" @click="item.click" class="mx-4 
        relative
        cursor-pointer 
        text-lg 
        after:content-[''] 
        after:absolute 
        after:-z-1 
        after:top-3/4
        after:bottom-0 
        after:-left-[0.1em] 
        after:-right-[0.1em] 
        after:cubic-bezier(0, 0.8, 0.13, 1)
        after:duration-150
        after:hover:top-0 
        after:bg-[#a97eff64] 
        dark:after:bg-[#36ade08f]"
        >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
