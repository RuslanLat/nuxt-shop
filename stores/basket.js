import { getData, setData } from 'nuxt-storage/local-storage'

export const useBasketStore = defineStore('basket', () => {
  const productStore = useProductsStore()
  let cachedBasketData

  const basket = ref({})

  function getBasketLocalStore() {
    cachedBasketData = getData('basket')
    if (cachedBasketData) {
      basket.value = cachedBasketData
    } else {
      basket.value = {}
    }
  }

  async function addProductToBasket(product_id, quantity = 1, fromCard = false) {
    if (basket.value[product_id]) {
      basket.value[product_id] = fromCard ? quantity : basket.value[product_id] + quantity
      cachedBasketData = getData('basket')
      cachedBasketData[product_id] = fromCard ? quantity : cachedBasketData[product_id] + quantity
      setData('basket', cachedBasketData)
    } else {
      basket.value[product_id] = quantity
      cachedBasketData = getData('basket')
      let newItem = new Object()
      newItem[product_id] = quantity
      cachedBasketData
        ? setData('basket', { ...cachedBasketData, ...newItem })
        : setData('basket', { ...newItem })
    }
  }

  async function putProductFromBasket(product_id) {
    basket.value[product_id]--
    cachedBasketData = getData('basket')
    cachedBasketData[product_id]--
    setData('basket', cachedBasketData)
  }

  async function deleteProductFromBasket(product_id) {
    const cachedBasketData = getData('basket')
    delete cachedBasketData[product_id]
    setData('basket', cachedBasketData)
    delete basket.value[product_id]
    productStore.basketProducts = productStore.basketProducts.filter((el) => el.id !== product_id)
  }

  return {
    getBasketLocalStore,
    addProductToBasket,
    putProductFromBasket,
    deleteProductFromBasket,
    basket
  }
})
