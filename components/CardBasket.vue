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
  },
  quantity: {
    typeof: Number,
    requred: true,
    default: 1
  }
})

const value = defineModel()

defineEmits(['addProduct', 'putProduct', 'deleteProduct'])
</script>

<template>
  <tr class="flex items-center justify-between border">
    <td><img :src="image" class="size-28 p-2" /></td>
    <td class="w-64">
      <h2 class="text-md font-bold">{{ title }}</h2>
      <span class="text-sm text-neutral-500">Цена без НДС</span>
    </td>
    <td>
      <div class="text-md font-bold">{{ numberFormat(price) }}</div>
      <span class="text-sm text-neutral-500">цена за 1 ед.</span>
    </td>
    <td class="flex h-9">
      <div
        @click="$emit('putProduct')"
        class="cursor-pointer rounded-l-md border p-2 hover:bg-gray-600 hover:text-white"
      >
        <IconsIconMinus class="size-4" />
      </div>
      <input type="text" v-model="value" class="h-full w-8 border-y text-center outline-none" />
      <div
        @click="$emit('addProduct')"
        class="cursor-pointer rounded-r-md border p-2 hover:bg-gray-600 hover:text-white"
      >
        <IconsIconPlus class="size-4" />
      </div>
    </td>
    <td>
      <div class="text-md font-bold">{{ numberFormat(price * quantity) }}</div>
    </td>
    <td @click="$emit('deleteProduct')" class="cursor-pointer p-2">
      <IconsIconXMark class="size-6" />
    </td>
  </tr>
  <!-- <div class="mx-2 flex items-center justify-between border p-2">
    <img :src="image" :alt="title" class="w-28" />
    <div>
      <h2 class="text-md font-bold">{{ title }}</h2>
      <span class="text-sm text-neutral-500">Цена без НДС</span>
    </div>
    <div>
      <div class="text-md font-bold">{{ price }} руб.</div>
      <span class="text-sm text-neutral-500">цена за 1 ед.</span>
    </div>
    <div class="flex h-9">
      <div class="rounded-l-md border p-1.5"><IconsIconMinus class="w-4" /></div>
      <input type="text" name="" id="" class="h-full w-8 border-y text-center outline-none" />
      <div class="rounded-r-md border p-1.5"><IconsIconPlus class="w-4" /></div>
    </div>
    <div class="text-md font-bold">{{ price * quantity }} руб.</div>
    <IconsIconXMark />
  </div> -->
</template>
