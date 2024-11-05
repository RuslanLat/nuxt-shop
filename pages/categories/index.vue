<script setup>
const categoriesStore = useCategoriesStore()

const { categories } = categoriesStore
</script>

<template>
  <div class="flex-1 bg-white p-4">
    <Breadcrumb current-link-title="Каталог" />
    <div class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      <Category
        v-for="categorie of categories"
        :key="categorie.id"
        :title="categorie.title"
        :slug="categorie.slug"
      />
    </div>
    <ScrollButton />
  </div>
</template>
