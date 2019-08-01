import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp,reactiveData } = mixins

export default {
  extends: Bar,
  mixins: [reactiveProp,reactiveData],
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}