<template>
  <div class="col-lg-4 pull-left">
    <div class="small bg-white p-4">
      <h6>Attendance Snapshot by Month</h6>
      <bar-chart :chart-data="datacollection" :options="options"></bar-chart>
    </div>
  </div>
</template>

<script>
  import BarChart from './js/bar.js'

  export default {
    components: {
      BarChart
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
          labels: ['13/06/19', '14/06/19', '15/06/19', '16/06/19', '17/06/19', '18/06/19'],
          datasets: [{
              label: 'Attendance',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: '#b51f32',
          }]
        };
      this.options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }],
            xAxes: [{
            barPercentage: 0.5,
            barThickness: 15,
            maxBarThickness: 30,
            minBarLength: 2,
            gridLines: {
                offsetGridLines: true
            }
        }]
        }
      }
      },
    }
  }
</script>
