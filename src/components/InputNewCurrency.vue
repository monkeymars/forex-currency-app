<template>
  <div class="ui two column centered grid">
    <div class="ui action input">
      <select class="ui selection dropdown currency-list" v-model="selected_currency">
        <option value="0" disabled selected>Select currency</option>
        <option v-for="(option, index) in options" :key="index" v-bind:value="index">
          {{ option }}
        </option>
      </select>
      <div class="ui white button" @click="addCurrency(selected_currency)">
        <i class="ui black plus icon" style="margin: 0;"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrecies } from '@/services/rates.service'

export default {
  name: 'InputNewCurrency',
  data () {
    return {
      selected_currency: 0,
      options: []
    }
  },
  props: {
    base: {
      type: String,
      default: 'USD'
    }
  },
  mounted () {
    this.options = getCurrecies().currencies
  },
  methods: {
    addCurrency (currency) {
      console.log(currency)
    }
  }
}
</script>

<style>
  select.currency-list {
    border-radius: 3px 0px 0px 3px !important;
    padding-top: 11px !important;
    background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right #fff !important;
    background-position-x: 190px !important;
    -webkit-appearance: none;
  }
</style>
