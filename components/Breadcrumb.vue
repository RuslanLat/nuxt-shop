<script setup>
defineProps({
  navItems: {
    typeof: Array,
    requred: true,
    default: [{ link: '/', title: 'Главная' }]
  },
  currentLinkTitle: {
    typeof: String,
    requred: true,
    default: undefined
  }
})
</script>

<template>
  <nav class="w-full">
    <ol class="flex">
      <li v-for="navItem of navItems" :key="navItem.title">
        <NuxtLink :to="navItem.link" class="text-primary hover:text-neutral-400">{{
          navItem.title
        }}</NuxtLink
        ><span class="mx-2 text-neutral-400">/</span>
      </li>
      <li class="text-neutral-400">{{ currentLinkTitle }}</li>
    </ol>
  </nav>
</template>
