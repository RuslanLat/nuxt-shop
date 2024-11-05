<script setup>
defineProps({
  as: {
    typeof: String,
    requred: false,
    default: 'section'
  }
})
</script>

<template>
  <Component :is="as">
    <slot />
  </Component>
</template>
