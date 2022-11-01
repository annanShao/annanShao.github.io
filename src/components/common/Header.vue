<script setup lang="ts">
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

</script>

<template>
  <div class="absolute top-0 w-full z-10 bg-whit p-4">
    <Icon class="absolute right-36 cursor-pointer hover:scale-110" @click="handleJumpToJuejin">
      <template #component>
        <img class="w-[24px] h-[24px]" src="../../assets/juejin.png" alt="">
      </template>
    </Icon>
    <GithubFilled class="absolute right-24 text-[24px] cursor-pointer  hover:scale-110" @click="handleJumpToGithub"/>
    <ThemeSwitch class="absolute right-12  hover:scale-110"/>
  </div>
</template>