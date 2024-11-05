<script setup>
const route = useRoute()

const categoriesStore = useCategoriesStore()

const { categories, getСategoryProducts } = categoriesStore

const category = computed(() => {
  return categories.find((el) => el.slug == route.params.slug)
})

const navItems = [
  { link: '/', title: 'Главная' },
  { link: '/categories', title: 'Каталог' }
]

await getСategoryProducts(route.params.slug)
// onMounted(getСategoryProducts)
</script>

<template>
  <div class="flex-1 bg-white p-2">
    <div class="w-full max-w-7xl">
      <Breadcrumb :nav-items="navItems" :current-link-title="category.title" />
      <CardList
        v-if="categoriesStore.categoryProducts[0].products.length != 0"
        :category-products="categoriesStore.categoryProducts"
      />
      <InfoMemo v-else text-memo="В данной категории товаров нет"
        ><template #icon><IconsIconShoppingBag class="size-48 text-gray-600" /></template
      ></InfoMemo>
      <ScrollButton />
    </div>
  </div>
</template>
