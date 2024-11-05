<script setup>
const media = useStrapiMedia()
const route = useRoute()
const productsStore = useProductsStore()
const basketStore = useBasketStore()

const categoriesStore = useCategoriesStore()

const messages = ref([])

const addProductBasket = (product) => {
  if (messages.value.length === 0) {
    messageSetInterval()
  }
  if (!basketStore.basket[product.id] || basketStore.basket[product.id] < product.quantity) {
    messages.value.unshift(`${product.title} - добавлен`)
    basketStore.addProductToBasket(product.id, undefined)
  } else {
    messages.value.unshift(`${product.title} - закончился`)
  }
}

let intervalId

function messageSetInterval() {
  console.log('start interval')
  intervalId = setInterval(() => {
    if (messages.value.length !== 0) {
      messages.value.pop()
    } else {
      clearInterval(intervalId)
      console.log('clear interval')
    }
  }, 2500)
}

defineProps(['categoryProducts'])
// function pageOnMounted() {
//   productsStore.findProducts()
//   basketStore.getBasketLocalStore()
// }

// onMounted(pageOnMounted)
</script>

<template>
  <div class="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    <Skeleton v-if="categoriesStore.isLoading" v-for="idx of 10" :key="idx" />
    <Card
      v-else
      v-for="product in categoryProducts[0].products"
      :key="product.id"
      :title="product.title"
      :price="product.price"
      :image="media + product.images[0].url"
      :slug="product.slug"
      @add-product="addProductBasket(product)"
    />
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
</template>
