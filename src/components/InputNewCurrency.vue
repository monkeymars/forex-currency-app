<template>
  <div class="ui two column centered grid" style="margin-bottom:45px;">
    <div v-show="cards.length" class="ten wide column">
      <div class="ui divider"></div>
    </div>
    <div class="ten wide column">
      <div class="ui action input centered grid">
        <select class="ui tiny header selection dropdown currency-list" v-model="selected_currency" style="margin: 0;">
          <option value="0" disabled selected>Select currency</option>
          <option v-for="(option, index) in options" :key="index" v-bind:value="index">
            {{index}} - {{ option }}
          </option>
        </select>
        <div class="ui white button" @click="addCurrency(selected_currency)">
          <i class="ui black plus icon" style="margin: 0;"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrecies } from '@/services/rates.service'
import { mapState } from 'vuex'

export default {
  name: 'InputNewCurrency',
  data () {
    return {
      selected_currency: 0,
      options: []
    }
  },
  computed: mapState(['cards']),
  mounted () {
    this.options = getCurrecies().currencies
  },
  methods: {
    isCardExist (currency, object) {
      let result = []
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          if (object[key].cardCurrency === currency) {
            result.push(object[key])
          }
        }
      }
      return result.length
    },

    addCurrency (currency) {
      let isCardExist = this.isCardExist(currency, this.cards)
      if (currency && !isCardExist) {
        let cards = this.cards
        cards.push({ cardCurrency: currency })
        this.$store.commit('setCards', cards)
      }
    }
  }
}
</script>

<style>
  select.currency-list {
    border-radius: 3px 0px 0px 3px !important;
    padding-top: 11px !important;
    background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right #fff !important;
    background-position-x: 225px !important;
    -webkit-appearance: none;
  }
</style>
