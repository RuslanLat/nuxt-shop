<script setup>
const { find } = useStrapi()
const media = useStrapiMedia()
const basketStore = useBasketStore()
const productStore = useProductsStore()

const isOpen = ref(false)

const deleteProductFromBasket = async (product_id) => {
  await basketStore.deleteProductFromBasket(product_id)
}

onMounted(productStore.findBasketProduct)
// const products = await find('products', {
//   populate: { images: true },
//   filters: { id: { $in: [...Object.keys(basketStore.basket).map((el) => Number(el))] } }
// })
const totalAmmount = computed(() =>
  productStore.basketProducts.reduce(
    (accumulator, product, key, array) =>
      basketStore.basket[product.id] * product.price + accumulator,
    0
  )
)

const callMinus = async (product_id) => {
  if (basketStore.basket[product_id] > 1) {
    await basketStore.putProductFromBasket(product_id)
  }
}

const callPlus = async (product_id, quantity) => {
  if (basketStore.basket[product_id] < quantity) {
    await basketStore.addProductToBasket(product_id)
  }
}

const inputControl = (el, product_id, quantity) => {
  if (!Number(el)) {
    basketStore.basket[product_id] = 1
  } else if (quantity < +el) {
    basketStore.basket[product_id] = quantity
  } else {
    basketStore.basket[product_id] = +el
  }
}

const navItems = [{ link: '/', title: 'Главная' }]
</script>

<template>
  <div class="relative flex-1 bg-white p-4">
    <Breadcrumb :nav-items="navItems" current-link-title="Корзина" />
    <div class="m-4">
      <h1 class="text-xl font-bold md:text-2xl">Корзина</h1>
      <div v-if="productStore.basketProducts.length != 0">
        <table class="m-2 w-full">
          <tbody class="">
            <CardBasket
              v-for="product of productStore.basketProducts"
              v-model="basketStore.basket[product.id]"
              :key="product.id"
              :image="media + product.images[0].url"
              :title="product.title"
              :price="product.price"
              :quantity="basketStore.basket[product.id]"
              @input="(el) => inputControl(el.target.value, product.id, product.quantity)"
              @put-product="callMinus(product.id)"
              @add-product="callPlus(product.id, product.quantity)"
              @delete-product="deleteProductFromBasket(product.id)"
            />
          </tbody>
        </table>
        <div class="m-2 flex w-full items-center gap-14 border px-8 py-2">
          <div>
            <div class="text-xl font-bold">Итого:</div>
            <span class="text-sm">Без НДС</span>
          </div>
          <div class="text-xl font-bold">{{ numberFormat(totalAmmount) }}</div>
          <div
            class="rounded-md border bg-gray-600 px-6 py-2 font-medium text-white hover:bg-black"
            @click="clickIsOpen"
          >
            Оформить заказ
          </div>
        </div>
      </div>
      <InfoMemo v-else text-memo="Ваша корзина пуста"
        ><template #icon>
          <IconsIconShoppingCart class="size-28 text-gray-600 md:size-48" />
        </template>
      </InfoMemo>
    </div>

    <div
      class="absolute bottom-3 right-3 border border-l-4 border-black bg-white px-6 py-2 font-medium"
      :class="{ hidden: isOpen == false }"
    >
      Триод 6С33С-В добавлен в корзину
    </div>
  </div>
</template>
