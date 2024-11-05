export const useCategoriesStore = defineStore('categories', () => {
  const { find, findOne } = useStrapi()
  const isLoading = ref(false)
  const categories = ref([])
  const category = ref({})
  const categoryProducts = ref([])

  async function getСategories() {
    isLoading.value = true
    const { data } = await find('categories')
    categories.value = data
    isLoading.value = false
  }

  const getСategoryProducts = async (item) => {
    isLoading.value = true
    const { data } = await find('categories', {
      populate: { products: { populate: { images: true } } },
      filters: { slug: { $eq: item } }
    })
    categoryProducts.value = data
    setTimeout(() => (isLoading.value = false), 2000)
    // isLoading.value = false
  }

  return {
    getСategories,
    getСategoryProducts,
    isLoading,
    categories,
    categoryProducts
  }
})
