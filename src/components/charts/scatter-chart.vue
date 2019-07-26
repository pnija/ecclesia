<template>
  <div class="small">
    <scatter-chart :chart-data="datacollection" :options="options"></scatter-chart>
  </div>
</template>

<script>
  import ScatterChart from './js/scatter.js'

  export default {
    components: {
      ScatterChart
    },
    data () {
      return {
        datacollection: null,
        options: null,
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
            datasets: [{
                label: 'Scatter Dataset',
                data: [{
                    x: -10,
                    y: 0
                }, {
                    x: 0,
                    y: 10
                }, {
                    x: 10,
                    y: 5
                }]
            }]
        };
        this.options =  {
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                }]
            }
        }
      },
    }
  }
</script>
