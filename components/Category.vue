<script setup>
defineProps({
  title: {
    typeof: String,
    requred: true,
    default: 'name'
  },
  slug: {
    typeof: String,
    requred: true
  }
})
</script>

<template>
  <NuxtLink
    :to="{ name: 'categories-slug', params: { slug } }"
    class="h-40 cursor-pointer content-center rounded-md border-2 bg-white text-center text-xl font-bold shadow-md"
  >
    <span class="drop-shadow-md">{{ title }}</span>
  </NuxtLink>
</template>
