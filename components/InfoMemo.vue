<script setup>
defineProps({
  textMemo: { typeof: String, require: true, default: '' }
})
</script>

<template>
  <div class="m-4">
    <div class="flex w-full flex-col items-center rounded-md border-2 p-6 shadow-md">
      <slot name="icon" />
      <span class="text-lg font-semibold md:text-xl">{{ textMemo }}</span>
      <div class="m-4 text-center text-base md:text-lg">
        Перейдите в <NuxtLink to="/categories" class="font-bold">каталог</NuxtLink>, для фомирования
        заказа
      </div>
    </div>
  </div>
</template>
