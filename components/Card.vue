<script setup>
defineProps({
  title: {
    typeof: String,
    requred: true,
    default: 'name'
  },
  price: {
    typeof: Number,
    requred: true,
    default: 0.0
  },
  image: {
    typeof: String,
    requred: true,
    default: ''
  },
  slug: {
    typeof: String,
    requred: true
  }
})

defineEmits(['addProduct'])
</script>

<template>
  <div class="space-y-2 rounded-md">
    <div class="relative cursor-pointer">
      <NuxtLink :to="{ name: 'product-slug', params: { slug } }">
        <img :src="image" :alt="title" class="rounded-md border" />
        <div
          class="absolute bottom-0 h-full w-full rounded-md bg-gradient-to-t from-black/65 to-black/5"
        ></div
      ></NuxtLink>
    </div>
    <div class="text-center font-medium text-gray-600">{{ numberFormat(price) }}</div>
    <div class="overflow-hidden text-ellipsis whitespace-nowrap font-medium">{{ title }}</div>

    <div
      @click="$emit('addProduct')"
      class="flex cursor-pointer items-center justify-center gap-4 rounded-md bg-gray-600 p-2 text-white hover:bg-black"
    >
      <IconsIconShoppingCart class="size-6" />
      <span class="font-semibold">Заказать</span>
    </div>
  </div>
</template>
