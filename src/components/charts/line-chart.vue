<template>
  <div class="col-lg-4 pull-left">
    <div class="small bg-white p-4">
      <h6>Attendance % by Month</h6>
      <line-chart :chart-data="datacollection" :options="options"></line-chart>
    </div>
  </div>
</template>

<script>
  import LineChart from './js/line.js'

  export default {
    components: {
      LineChart
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
