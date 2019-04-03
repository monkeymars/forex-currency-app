<template>
  <div class="ui text container">
    <!-- Active Currency -->
    <active-currency/>

    <!-- List of Currency -->
    <div class="ui one column centered grid">
      <div class="ui cards" style="width: 450px;">
        <currency-list/>
        <div class="ui divider"></div>
      </div>
    </div>

    <!-- Sumbit New Currency -->
    <input-new-currency base="USD"/>
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
