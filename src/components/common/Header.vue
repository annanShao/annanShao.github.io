<script setup lang="ts">
import { router } from '@/routers';
import ThemeSwitch from '@/components/common/ThemeSwitch.vue';
import Icon, {
  GithubFilled
} from '@ant-design/icons-vue';

const handleJumpToGithub = () => {
  window.open('https://github.com/annanShao');
}

const handleJumpToJuejin = () => {
  window.open('https://juejin.cn/user/3329738427607224');
}

const handleRedirectToHome = () => {
  router.replace({name: 'Home'})
}

</script>

<template>
  <div class="p-4">
    <div class="absolute font-bold cursor-pointer text-lg dark:text-white hover:underline" @click="handleRedirectToHome">
      San
    </div>
    <Icon class="absolute right-36 cursor-pointer hover:scale-110" @click="handleJumpToJuejin">
      <template #component>
        <img class="w-[24px] h-[24px]" src="../../assets/juejin.png" alt="">
      </template>
    </Icon>
    <GithubFilled class="absolute right-24 text-[24px] cursor-pointer  hover:scale-110" @click="handleJumpToGithub"/>
    <ThemeSwitch class="absolute right-12  hover:scale-110"/>
  </div>
</template>