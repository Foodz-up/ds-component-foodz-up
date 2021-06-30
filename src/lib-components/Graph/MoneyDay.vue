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
    label: 'Samedi',
    value: '433'
  },
  {
    label: 'Dimanche',
    value: '259'
  },
  {
    label: 'Lundi',
    value: '605'
  },
  {
    label: 'Mardi',
    value: '322'
  },
  {
    label: 'Mercredi',
    value: '468'
  },
  {
    label: 'Jeudi',
    value: '397'
  },
  {
    label: 'Vendredi',
    value: '167'
  }
]

// STEP 3: Configure your chart
const dataSource = {
  chart: {
    caption: 'Revenu par jour',
    subCaption: 'Semaine en cours',
    numberPrefix: '€',
    theme: 'fusion'
  },
  data: chartData
}

export default {
  name: 'App',
  data () {
    return {
      type: 'column2d',
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
