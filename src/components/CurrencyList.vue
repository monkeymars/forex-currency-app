<template>
  <div class="ui two column centered grid">
    <div class="ui cards" style="width: 450px;">
      <card
        v-for="(card, index) in cards" :key="index"
        :card-currency="card.cardCurrency"
        :currency-name="getName(card.cardCurrency)"
        :rate="getCurrencyRate(card.cardCurrency)"
        :active-currency="currency"
        :active-nominal="nominal"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Card from '@/components/Card'
import { getCurrecyName } from '@/services/rates.service'

export default {
  name: 'CurrencyList',
  components: {
    Card
  },
  computed: mapState([
    'cards',
    'nominal',
    'currency',
    'rates'
  ]),
  methods: {
    getCurrencyRate (currencyId) {
      let result
      let Obj = this.rates

      for (var key in Obj) {
        if (Obj.hasOwnProperty(key)) {
          if (key === currencyId) {
            result = Obj[key]
          }
        }
      }
      return result
    },
    getName (currencyId) {
      let currecyName

      getCurrecyName(currencyId, (result) => {
        currecyName = result
      })

      return currecyName
    }
  }
}
</script>
