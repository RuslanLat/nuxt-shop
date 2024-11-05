<script setup>
const route = useRoute()
const media = useStrapiMedia()

const productsStore = useProductsStore()
const basketStore = useBasketStore()

await productsStore.findProduct(route.params.slug)

// const product = computed(() => {
//   const idx = productsStore.products?.data.findIndex((el) => el.slug === route.params.slug)

//   return productsStore.products?.data[idx]
// })
useSeoMeta({
  title: () => productsStore.product.title
  // description: setting?.data.siteDescription,
  // ogTitle: setting?.data.seoMeta.metaTitle,
  // ogDescription: setting?.data.seoMeta.metaDescription,
  // ogType: setting?.data.siteType,
  // ogSiteName: setting?.data.siteName,
  // ogUrl: setting?.data.siteUrl,
  // ogImage: media + setting?.data.image.url,
  // robots: setting?.data.robots
})

const idx = ref(0)

const currentQuantity = ref(basketStore.basket[productsStore.product.id] || 1)

const callMinus = () => {
  if (currentQuantity.value > 1) {
    currentQuantity.value--
  }
}

const callPlus = () => {
  if (currentQuantity.value < productsStore.product.quantity) {
    currentQuantity.value++
  }
}

const inputControl = (el) => {
  if (!Number(el)) {
    currentQuantity.value = 1
  } else if (productsStore.product.quantity < +el) {
    currentQuantity.value = productsStore.product.quantity
  } else {
    currentQuantity.value = +el
  }
}

const addProductBasket = () => {
  basketStore.addProductToBasket(productsStore.product.id, currentQuantity.value, true)
}

let intervalId

function getProduct() {
  intervalId = setInterval(() => {
    if (idx.value < productsStore.product.images.length - 1) {
      idx.value++
    } else {
      idx.value = 0
    }
  }, 5000)
  productsStore.findProduct(route.params.slug)
}

onMounted(getProduct)

onUnmounted(() => clearInterval(intervalId))
</script>

<template>
  <div class="flex-1 bg-white p-4">
    <Breadcrumb :current-link-title="productsStore.product.title" />
    <div v-if="!productsStore.isLoading">
      <div class="mt-2 flex items-center justify-center gap-24">
        <div>
          <img
            :src="media + productsStore.product.images[idx].url"
            :alt="productsStore.product.title"
            class="rounded-md shadow-sm"
          />
          <div class="mt-1 flex items-center justify-center gap-2">
            <span
              class="rounded-full border p-1"
              :class="{ 'bg-black': idx == 0, 'bg-gray-300': idx != 0 }"
            ></span>
            <span
              class="rounded-full border p-1"
              :class="{ 'bg-black': idx == 1, 'bg-gray-300': idx != 1 }"
            ></span>
          </div>
        </div>
        <div class="space-y-5">
          <h1 class="text-2xl font-bold">{{ productsStore.product.title }}</h1>
          <div class="text-xl font-bold">
            Купить: {{ numberFormat(productsStore.product.price) }}
          </div>
          <span class="text-neutral-500">Цена без НДС</span>
          <p>На складе: {{ productsStore.product.quantity }} ед.</p>
          <div class="flex flex-col items-center gap-4">
            <div class="flex h-9">
              <div
                @click="callMinus"
                class="cursor-pointer rounded-l-md border p-2 hover:bg-gray-600 hover:text-white"
              >
                <IconsIconMinus class="size-5" />
              </div>
              <input
                type="text"
                v-model="currentQuantity"
                @input="(el) => inputControl(el.target.value)"
                class="h-full w-8 border-y text-center outline-none"
              />
              <div
                @click="callPlus"
                class="cursor-pointer rounded-r-md border p-2 hover:bg-gray-600 hover:text-white"
              >
                <IconsIconPlus class="size-5" />
              </div>
            </div>

            <div
              @click="addProductBasket"
              class="flex cursor-pointer items-center justify-center gap-4 rounded-md bg-gray-600 p-2 px-4 text-white hover:bg-black"
            >
              <IconsIconShoppingCart class="size-6" />
              <span class="font-semibold">Заказать</span>
            </div>
          </div>
        </div>
      </div>
      <div
        v-html="productsStore.product.description.replace(/\n/g, '<br>')"
        class="p-2 text-justify"
      ></div>
    </div>
    <div v-else>Загрузка данных</div>
  </div>
</template>
