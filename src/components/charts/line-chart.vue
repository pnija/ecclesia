<template>
  <div class="col-lg-4 col-md-4 pull-left res-pd">
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
                    x: 0,
                    y: 5
                }, {
                    x: 5,
                    y: 0
                }, {
                    x: 10,
                    y: 5
                }],
                backgroundColor:'rgba(0,0,0,0)',
                borderColor:'rgba(181,31,50,1)'
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

<style scope>
  @media only screen and (max-width:767px){
    .res-pd{
            margin-bottom: 30px;
    }
  }
</style>