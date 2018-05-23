import {Bar} from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {
      datacollection: {
        labels: ['January', 'February', 'March'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 10, 60]
          },{
            label: 'Data Two',
            backgroundColor: '#05CBE1',
            data: [60, 55, 30]
          },{
            label: 'Data Three',
            backgroundColor: '#E0E550',
            data: [20, 50, 33]
          }
        ]
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
  }
}