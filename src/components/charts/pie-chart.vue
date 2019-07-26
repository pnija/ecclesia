<template>
  <div class="small">
    <pie-chart :chart-data="datacollection"></pie-chart>
  </div>
</template>

<script>
  import PieChart from './js/pie.js'

  export default {
    components: {
      PieChart
    },
    data () {
      return {
        datacollection: null,
        chartdata: [10, 20, 30],
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
            datasets: [{
                data: [10, 20, 30]
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Red',
                'Yellow',
                'Blue'
            ]
        };
      },
    }
  }
</script>

<style>
  .small {
    max-width: 200px;
    margin:  150px auto;
  }
</style>
