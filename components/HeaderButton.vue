<script setup>
const media = useStrapiMedia()
const basketStore = useBasketStore()

defineProps(['setting'])
</script>

<template>
  <Bounded
    as="header"
    class="sticky top-0 z-10 flex items-center justify-between bg-white px-8 py-4"
  >
    <div class="flex items-center gap-4">
      <!-- <img :src="media + setting?.data.image.url" :alt="setting?.data.image.alternativeText" /> -->
      <NuxtLink to="/"
        ><div class="border-2 border-black py-1.5 pl-2 text-4xl font-bold">
          РТ <span class="bg-black px-3 py-0.5 text-white">ЗИП</span>
        </div></NuxtLink
      >
      <div>
        <div class="text-2xl font-bold">{{ setting?.data.siteName }}</div>
        <span class="text-sm">{{ setting?.data.siteDescription }}</span>
      </div>
    </div>
    <NuxtLink to="/basket"
      ><div class="relative rounded-full bg-black p-3 text-white">
        <IconsIconShoppingCart class="size-6" />
        <div
          class="absolute -right-2.5 -top-2 rounded-full border border-white bg-gray-600 px-2 py-1 text-xs/3"
        >
          {{ Object.keys(basketStore.basket).length }}
        </div>
      </div></NuxtLink
    >
  </Bounded>
</template>
