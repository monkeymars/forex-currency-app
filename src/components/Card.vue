<template>
  <div class="ui fluid card">
    <div class="content">
      <span class="ui large header right floated" style="margin:0;">
        {{ currencyFormatter(cardCurrency, (rate * activeNominal)) }}
      </span>
      <div class="ui large header left floated" style="margin:0;">{{ cardCurrency }}</div>
      <span class="description left floated">{{ cardCurrency }} - {{ currencyName }}</span>
    </div>

    <div class="extra content">
      <span class="left floated like"> 1 {{ activeCurrency }} = {{ cardCurrency }} {{ currencyFormatter(cardCurrency, rate) }}</span>
      <button class="ui mini basic white button right floated star">
        <i class="ui red minus icon" style="margin:0;"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  methods: {
    currencyFormatter (currency, nominal) {
      const formatter = new Intl.NumberFormat({
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2
      })
      return formatter.format(nominal)
    },
  },
  props: [
    'currencyName',
    'activeNominal',
    'activeCurrency',
    'cardCurrency',
    'rate'
  ]
}
</script>
