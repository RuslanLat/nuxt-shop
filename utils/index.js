export const { format: numberFormat } = Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB'
})

export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

export const copyText = () => {
  navigator.clipboard.writeText(
    'Банковские реквизиты для оплаты копий документов:\n\n \
    ИП Мошков В.В.\n \
    ИНН 1648013442\n \
    КПП 785050001\n \
    Банк ПАО "АК БАРС" БАНК г. Казань\n \
    Расчетный счет: 407 02 810 401 023 000 638\n \
    Кор/счет: 301 01 810 000 000 000 805\n \
    БИК: 049 205 805'
  )
}
