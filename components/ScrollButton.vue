<script setup>
const showButton = ref(true)

function onScroll() {
  if (window.pageYOffset > 70) {
    showButton.value = false
  } else {
    showButton.value = true
  }
}

onBeforeMount(() => window.addEventListener('scroll', onScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="sticky bottom-6 mt-2 flex justify-end" :class="{ hidden: showButton }">
    <button class="rounded-full bg-black p-2 text-white" @click="scrollTop">
      <IconsIconArrowUp class="size-6" />
    </button>
  </div>
</template>
