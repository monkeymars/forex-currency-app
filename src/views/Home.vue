<template>
  <div class="ui text container">

    <!-- Active Currency -->
    <div class="ui two column centered grid">
      <div class="ten wide column">
        <div class="column">
          <i class="ui tiny header">USD - United States Dollars</i><br>
          <div class="ui input">
            <select class="ui medium header selection dropdown"
              style="border:none;padding:0;min-width: 65px;">
              <option value="all">USD</option>
              <option value="all">EUR</option>
              <option value="all">IDR</option>
            </select>
          </div>
          <div class="ui medium header transparent input right floated" style="margin-top: 10px;min-width:200px;">
            <input class="ui medium header" value="10" type="number" style="text-align: right;">
          </div>
        </div>
        <div class="column">
          <div class="ui divider"></div>
        </div>
      </div>
    </div>

    <!-- List of Currencies -->
    <div class="ui one column centered grid">
      <div class="ui cards" style="width: 450px;">
        <div class="ui fluid card">
          <div class="content">
            <span class="right floated">
              <h2>144.120</h2>
            </span>
            <div class="header left floated">
              <h1>IDR</h1>
            </div>
            <div class="description left floated">
              <p>IDR - Indonesian Rupiah</p>
            </div>
          </div>
          <div class="extra content">
            <span class="left floated like">
              <i>1 USD = IDR 14.144</i>
            </span>
            <span class="right floated star">
              <i class="ui red minus icon" style="margin:0;"></i>
            </span>
          </div>
        </div>
        <div class="ui divider"></div>
      </div>
    </div>

    <!-- Sumbit New Currency -->
    <div class="ui two column centered grid">
      <div class="ui action input">
        <select class="ui selection dropdown"
          style="border-radius:3px 0px 0px 3px;">
          <option value="all">All</option>
        </select>
        <div class="ui white button">
          <i class="ui black plus icon" style="margin: 0;"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Home extends Vue {}
</script>
