<template>
  <div class="ui two column centered grid">
    <div class="ten wide column">
      <div class="column">
        <i class="ui grey tiny header">USD - United States Dollars</i><br>
        <div class="ui input">
          <select class="ui medium header selection dropdown select-currency">
            <option value="all">USD</option>
            <option value="all">EUR</option>
            <option value="all">IDR</option>
          </select>
        </div>
        <div class="ui medium header transparent input right floated" style="margin-top:10px;min-width:200px;">
          <input class="ui medium header" value="10" min="1" type="number" style="text-align: right;">
        </div>
      </div>
      <div class="column">
        <div class="ui divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActiveCurrency',
  mounted () {}
}
</script>

<style>
    .select-currency {
        border:none !important;
        padding:0 !important;
        min-width: 65px !important;
    }
</style>
