<script setup>
useSeoMeta({
  title: 'Контакты'
  // description: 'помощь помощь',
  // ogImage: 'логоти ссылка'
})
</script>

<template>
  <div class="flex-1 bg-white p-4">
    <div class="w-full max-w-7xl">
      <Breadcrumb current-link-title="Контакты" />
      <div class="m-4">
        <div class="text-xl font-bold md:text-2xl">Контактная информация</div>
        <div class="mt-4 text-lg font-bold md:text-xl">ИП Мошков В.В.</div>
        <span class="text-sm text-neutral-400 md:text-base">РАДИОТЕХНИЧЕСКИЙ ЗИП</span>
        <div class="grid grid-flow-row md:grid-flow-col md:grid-cols-2">
          <div class="m-2">
            <div class="font-bold">Адрес:</div>
            <span>Татарстан, г. Зеленодольск, ул. Гоголя, д.37/15</span>
            <div class="font-bold">Телефон:</div>
            <span>+7-939-312-78-33</span>
            <div class="font-bold">Email:</div>
            <span>rt-zip@yandex.ru</span>
            <div class="font-bold">Режим работы:</div>
            <ul>
              <li>- с 8:00 до 17:00</li>
              <li>- перерыв на обед: с 12:00 до 13:00</li>
              <li>- выходной: суббота, воскресенье</li>
            </ul>
          </div>
          <div class="border-l-4 border-gray-600 bg-gray-100 px-4 py-2 text-justify">
            ИП Мошков В.В. является надежным поставщиком радиотехнических компонентов. Производим
            доставку в любой регион России. На складе находится более 1 000 различных наименований.
          </div>
        </div>
      </div>
      <ScrollButton />
    </div>
  </div>
</template>
