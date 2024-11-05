export const useProductsStore = defineStore('products', () => {
  const basketStore = useBasketStore()
  const products = ref([])
  const basketProducts = ref([])
  const product = ref({})
  const isLoading = ref(false)
  const { find, findOne } = useStrapi()

  async function findProducts() {
    isLoading.value = true
    products.value = await find('products', { populate: { images: true } })
    setTimeout(() => (isLoading.value = false), 2000)
    // isLoading.value = false
  }

  async function findProduct(item) {
    isLoading.value = true
    const { data } = await findOne('products', {
      populate: { images: true },
      filters: { slug: { $eq: item } }
    })
    product.value = data[0]
    isLoading.value = false
  }

  async function findBasketProduct() {
    const { data } = await find('products', {
      populate: { images: true },
      filters: { id: { $in: [...Object.keys(basketStore.basket).map((el) => Number(el)), -1] } }
    })
    basketProducts.value = data
  }

  return {
    findProduct,
    findProducts,
    findBasketProduct,
    product,
    products,
    basketProducts,
    isLoading
  }
})
