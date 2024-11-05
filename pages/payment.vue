<script setup>
useSeoMeta({
  title: 'Оплата'
  //   description: 'помощь помощь',
  //   ogImage: 'логоти ссылка'
})
</script>

<template>
  <div class="flex-1 bg-white p-4">
    <div class="w-full max-w-7xl">
      <Breadcrumb current-link-title="Оплата" />
      <div class="m-4 flex flex-col gap-y-4">
        <div class="text-xl font-bold md:text-2xl">Условия оплаты</div>
        <p class="text-justify indent-6">
          На основании заказа покупателю выставляется счет на оплату, товар при этом резервируется
          на складе ИП Мошков В.В. Срок резервирования товара не более 20 (двадцати) банковских дней
          с момента выставления счета. В счет дополнительно включаются почтовые или транспортные
          расходы по доставке товара. Счет направляется по электронной почте, указанной в заказе.
          При необходимости оригинал счета направляется вместе с товаром при отгрузке.
        </p>
        <div class="relative border-l-4 border-gray-600 bg-gray-100 px-4 py-2 text-justify">
          <div class="font-semibold">Банковские реквизиты для оплаты копий документов:</div>
          <ul class="mt-2">
            <li>ИП Мошков В.В.</li>
            <li>ИНН 1648013442</li>
            <li>КПП 785050001</li>
            <li>Банк ПАО "АК БАРС" БАНК г. Казань</li>
            <li>Расчетный счет: 407 02 810 401 023 000 638</li>
            <li>Кор/счет: 301 01 810 000 000 000 805</li>
            <li>БИК: 049 205 805</li>
          </ul>
          <div class="has-tooltip absolute -top-5 right-2 flex flex-col items-end">
            <span class="tooltip mb-2 rounded border bg-white px-4 shadow-md">копировать</span>
            <IconsIconDocumentDuplicate
              @click="copyText"
              class="size-6 cursor-pointer hover:text-gray-600"
            />
          </div>
        </div>
      </div>
      <ScrollButton />
    </div>
  </div>
</template>

<style scoped>
.tooltip {
  @apply invisible;
}

.has-tooltip:hover .tooltip {
  @apply visible;
}
</style>
