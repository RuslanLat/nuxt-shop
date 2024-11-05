<script setup>
const categoriesStore = useCategoriesStore()
const { getСategories } = categoriesStore
const { findOne } = useStrapi()
const media = useStrapiMedia()

const setting = await findOne('global', { populate: { image: true, seoMeta: true } })

useSeoMeta({
  title: setting?.data.siteName,
  description: setting?.data.siteDescription,
  ogTitle: setting?.data.seoMeta.metaTitle,
  ogDescription: setting?.data.seoMeta.metaDescription,
  ogType: setting?.data.siteType,
  ogSiteName: setting?.data.siteName,
  ogUrl: setting?.data.siteUrl,
  ogImage: media + setting?.data.image.url,
  robots: setting?.data.robots
})

onMounted(getСategories)
</script>

<template>
  <div class="font-montserrat m-auto flex min-h-screen max-w-7xl flex-col">
    <HeaderTop />
    <HeaderButton :setting="setting" />
    <Menu />
    <slot />
    <Footer />
  </div>
  <div class="fixed inset-0 z-[-1] bg-gradient-to-tr from-black/65 to-black/5 opacity-70" />
</template>
