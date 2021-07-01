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
    label: 'août-2020',
    value: '397'
  },
  {
    label: 'septembre-2020',
    value: '240'
  },
  {
    label: 'octobre-2020',
    value: '283'
  },
  {
    label: 'novembre-2020',
    value: '374'
  },
  {
    label: 'décembre-2020',
    value: '493'
  },
  {
    label: 'janvier-2021',
    value: '425'
  },
  {
    label: 'février-2021',
    value: '382'
  },
  {
    label: 'mars-2021',
    value: '236'
  },
  {
    label: 'avril-2021',
    value: '254'
  },
  {
    label: 'mai-2021',
    value: '428'
  },
  {
    label: 'juin-2021',
    value: '293'
  },
  {
    label: 'Juillet-2021',
    value: '25'
  }
]

// STEP 3: Configure your chart
const dataSource = {
  chart: {
    caption: 'Commande par mois',
    subCaption: 'Année en cours',
    numberPrefix: '€',
    theme: 'fusion'
  },
  data: chartData
}

export default {
  name: 'App',
  data () {
    return {
      type: 'line',
      renderAt: 'chart-container',
      width: '1250',
      height: '400',
      dataFormat: 'json',
      dataSource
    }
  }
}
</script>

<style scoped>

</style>
