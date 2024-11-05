<script setup>
import IconBars3 from '@/components/icons/IconBars3.vue'
</script>

<template>
  <Bounded as="nav" class="flex items-center justify-between bg-black font-medium text-white">
    <ul class="flex">
      <li class="flex cursor-pointer items-center hover:bg-gray-600">
        <NuxtLink to="/categories" class="flex items-center gap-4 px-6 py-4"
          ><IconsIconBars3 class="size-6" />Каталог</NuxtLink
        >
      </li>
      <li class="invisible flex cursor-pointer items-center hover:bg-gray-600 md:visible">
        <NuxtLink to="/about" class="px-6 py-4">О компании</NuxtLink>
      </li>
      <li class="invisible flex cursor-pointer items-center hover:bg-gray-600 md:visible">
        <NuxtLink to="/payment" class="px-6 py-4">Оплата</NuxtLink>
      </li>
      <li class="invisible flex cursor-pointer items-center hover:bg-gray-600 md:visible">
        <NuxtLink to="/delivery" class="px-6 py-4">Доставка</NuxtLink>
      </li>
      <li class="invisible flex cursor-pointer items-center hover:bg-gray-600 md:visible">
        <NuxtLink to="/contacts" class="px-6 py-4">Контакты</NuxtLink>
      </li>
    </ul>
  </Bounded>
</template>
