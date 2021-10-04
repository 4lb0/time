/* global Vue */
const app = {
  data () {
    return {
      time: ''
    }
  },
  mounted: function () {
    const addZeros = (number) => {
      return number < 10 ? '0' + number : number
    }
    const update = () => {
      const date = new Date()
      this.time = date.getHours() + ':' + addZeros(date.getMinutes()) + ':' + addZeros(date.getSeconds())
      document.title = this.time
    }
    update()
    setInterval(update, 1000)
  }
}
Vue.createApp(app).mount('#app')
