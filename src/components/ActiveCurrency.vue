<template>
  <div class="ui two column centered grid">
    <div class="ten wide column">
      <div class="column">
        <i class="ui grey tiny header">
          {{ selectedCurrency }} - {{ currencyName }}
        </i>
        <br>
        <div class="ui input">
          <select
            v-model="selectedCurrency"
            class="ui medium header selection dropdown select-currency"
            @change="changeCurrency(selectedCurrency)"
          >
            <option v-for="(option, index) in supportedCurrency" :key="index" v-bind:value="option">
              {{ option }}
            </option>
          </select>
        </div>
        <div
          class="ui medium header transparent input right floated"
          style="margin-top:10px;min-width:200px;"
        >
          <input
            class="ui medium header nominal"
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
      selectedCurrency: 'USD',
      currencyName: 'United States Dollars',
      supportedCurrency: ['USD', 'CAD', 'IDR', 'GBP', 'CHF', 'SGD', 'INR', 'MYR', 'JPY', 'KRW']
    }
  },
  mounted () {
    getBaseRates(this.selectedCurrency, (result) => {
      this.$store.commit('setRates', result.rates)
    })
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
      this.$store.commit('setCurrency', value)

      getCurrecyName(value, (res) => {
        this.currencyName = res
      })

      getBaseRates(value, (result) => {
        this.$store.commit('setRates', result.rates)
      })
    }
  }
}
</script>

<style>
  input.nominal::-webkit-inner-spin-button {
    margin-left: 15px;
    opacity: 1;
  }
  .select-currency {
    border: none !important;
    padding: 0 !important;
    min-width: 65px !important;
  }
</style>
