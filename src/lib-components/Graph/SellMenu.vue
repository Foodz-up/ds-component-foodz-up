<template>
  <div id="chart-container">
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataformat="dataFormat"
      :data-source="dataSource"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import VueFusionCharts from 'vue-fusioncharts'
import FusionCharts from 'fusioncharts'
import Column2D from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme)

// STEP 2: Prepare the data
const chartData = [
  {
    label: 'Menu classique',
    value: '146'
  },
  {
    label: 'Menu Maxi',
    value: '209'
  },
  {
    label: 'Menu duo',
    value: '78'
  },
  {
    label: 'Menu famille',
    value: '69'
  },
  {
    label: 'Menu fast',
    value: '162'
  }
]

// STEP 3: Configure your chart
const dataSource = {
  chart: {
    caption: 'Menu Vendu',
    subCaption: 'Mois dernier',
    defaultCenterLabel: 'Total des menus: 664',
    centerLabel: '$label: $value',
    theme: 'fusion'
  },
  data: chartData
}

export default {
  name: 'App',
  data () {
    return {
      type: 'doughnut2d',
      renderAt: 'chart-container',
      width: '750',
      height: '400',
      dataFormat: 'json',
      dataSource
    }
  }
}
</script>

<style scoped>

</style>
