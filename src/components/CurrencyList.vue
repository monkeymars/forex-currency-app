<template>
  <div class="ui one column centered grid">
    <div class="ui cards" style="width: 450px;">
      <card
        v-for="(card, index) in cards" :key="index"
        :card-currency="card.cardCurrency"
        :currency-name="getName(card.cardCurrency)"
        :rate="getCurrencyRate(card.cardCurrency)"
        :active-currency="currency"
        :active-nominal="nominal"
      />
      <div class="ui divider"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Card from '@/components/Card'
import {
  getCurrecyName,
  getCurrecies,
  getBaseRates
} from '@/services/rates.service'

export default {
  name: 'CurrencyList',
  data () {
    return {
      cards: [
        { cardCurrency: 'IDR' },
        { cardCurrency: 'USD' },
        { cardCurrency: 'JPY' }
      ]
    }
  },
  components: {
    Card
  },
  computed: mapState([
    'nominal',
    'currency',
    'rates'
  ]),
  methods: {
    getCurrencyRate (currencyId) {
      let result,
        Obj = this.rates

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
      let currecyName;

      getCurrecyName(currencyId, (result) => {
        currecyName = result
      })

      return currecyName
    }
  }
}
</script>
