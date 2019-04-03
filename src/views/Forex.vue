<template>
  <div class="ui text container">
    <active-currency/>
    <currency-list/>
    <input-new-currency/>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import ActiveCurrency from '@/components/ActiveCurrency'
import CurrencyList from '@/components/CurrencyList'
import InputNewCurrency from '@/components/InputNewCurrency'

@Component({
  components: {
    ActiveCurrency,
    CurrencyList,
    InputNewCurrency
  }
})
export default class Home extends Vue {}
</script>
