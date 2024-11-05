<script setup>
const media = useStrapiMedia()
const productsStore = useProductsStore()
const basketStore = useBasketStore()

const messages = ref([])
const messagesLength = ref(0)

const addProductBasket = (product) => {
  if (!basketStore.basket[product.id] || basketStore.basket[product.id] < product.quantity) {
    messages.value.unshift(`${product.title} - добавлен`)
    basketStore.addProductToBasket(product.id, undefined)
  } else {
    messages.value.unshift(`${product.title} - закончился`)
  }
  messagesLength.value = messages.value.length
}

watch(messagesLength, () => {
  if (messagesLength.value === 1) {
    console.log('start interval')
    messageSetInterval()
  }
})

let intervalId

function messageSetInterval() {
  intervalId = setInterval(() => {
    if (messages.value.length !== 0) {
      messages.value.pop()
    } else {
      clearInterval(intervalId)
      console.log('clear interval')
    }
  }, 2500)
}

function pageOnMounted() {
  productsStore.findProducts()
  basketStore.getBasketLocalStore()
}

onMounted(pageOnMounted)
</script>

<template>
  <Bounded class="flex-1 bg-white p-2">
    <div class="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      <template v-if="!productsStore.isLoading"
        ><Card
          v-for="product in productsStore.products?.data"
          :key="product.id"
          :title="product.title"
          :price="product.price"
          :image="media + product.images[0].url"
          :slug="product.slug"
          @add-product="addProductBasket(product)"
      /></template>
      <template v-else><Skeleton v-for="idx of 10" :key="idx" /></template>

      <ul v-if="messages.length > 0" class="fixed bottom-12 z-10 space-y-2">
        <li
          v-for="message of messages"
          :key="message"
          class="w-72 border border-l-4 border-black bg-gray-100 px-6 py-2 font-medium"
        >
          {{ message }}
        </li>
      </ul>
    </div>
    <ScrollButton />
  </Bounded>
</template>
