<template>
  <div class="ui two column centered grid">
    <div class="ten wide column">
      <div class="column">
        <i class="ui grey tiny header">
          {{ selected_currency }} - {{ currencyName }}
        </i>
        <br>
        <div class="ui input">
          <select
            v-model="selected_currency"
            class="ui medium header selection dropdown select-currency"
            @change="changeCurrency(selected_currency)"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="IDR">IDR</option>
          </select>
        </div>
        <div
          class="ui medium header transparent input right floated"
          style="margin-top:10px;min-width:200px;"
        >
          <input
            class="ui medium header"
            v-model="nominal"
            min="1"
            type="number"
            style="text-align: right;"
          >
        </div>
      </div>
      <div class="column">
        <div class="ui divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getCurrecyName,
  getCurrecies,
  getBaseRates
} from '@/services/rates.service'

export default {
  name: 'ActiveCurrency',
  data () {
    return {
      selected_currency: 'USD',
      currencyName: 'United States Dollars'
    }
  },
  computed: {
    nominal: {
      get () {
        return this.$store.getters['getNominal']
      },
      set (value) {
        return this.$store.commit('setNominal', value)
      }
    }
  },
  methods: {
    changeCurrency (value) {
      // set active currency
      this.$store.commit('setCurrency', value)

      // get currency name
      getCurrecyName(value, (res) => {
        this.currencyName = res
      })

      // get base rates
      getBaseRates(value, (result) => {
        this.$store.commit('setRates', result.rates)
      })

      console.log(
        this.$store.getters['getCurrency'],
        this.$store.getters['getNominal'],
        this.$store.getters['getRates']
      )
    }
  }
}
</script>

<style>
  .select-currency {
    border: none !important;
    padding: 0 !important;
    min-width: 65px !important;
  }
</style>
