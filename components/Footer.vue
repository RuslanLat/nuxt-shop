<script setup>
const MENU = [
  { link: '/about', title: 'О компании' },
  { link: '/categories', title: 'Каталог' },
  { link: '/payment', title: 'Оплата' },
  { link: '/delivery', title: 'Доставка' }
]
</script>

<template>
  <Bounded as="footer" class="flex items-center justify-between bg-white px-8 py-2">
    <ul class="flex gap-4 text-sm text-neutral-500">
      <li v-for="item of MENU" :key="item.link" class="cursor-pointer hover:text-black">
        <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
      </li>
    </ul>
    <div class="cursor-pointer text-center">
      <NuxtLink to="/"
        ><div class="font-semibold">РТ ЗИП</div>
        <span class="text-sm">ИП Мошков В.В. <b>|</b> ИНН 125346789</span></NuxtLink
      >
    </div>
    <ul class="flex gap-4 text-sm text-neutral-500">
      <li class="cursor-pointer hover:text-black">
        <NuxtLink to="/contacts">Контакты</NuxtLink>
      </li>
    </ul>
  </Bounded>
</template>
