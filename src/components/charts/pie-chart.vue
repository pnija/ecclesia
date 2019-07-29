<template>
  <div class="col-lg-4 pull-left">
    <div class="small bg-white p-4">
      <h6>Attendance % - Current vs Past Week</h6>
      <pie-chart :chart-data="datacollection"></pie-chart>
    </div>
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
                data: [25, 75],
                backgroundColor: ['#d3ac6b','#b51f32']
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Current Week',
                'Past Week',
            ]
        };
      },
    }
  }
</script>


