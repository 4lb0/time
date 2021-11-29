/* global PetiteVue */
const app = {
  time: '',
  update () {
    const zero = (number) => {
      return number < 10 ? '0' + number : number
    }
    const date = new Date()
    this.time = date.getHours() + ':' + zero(date.getMinutes()) + ':' + zero(date.getSeconds())
    document.title = this.time
  },
  setUp () {
    this.update()
    setInterval(this.update, 1000)
  }
}
PetiteVue.createApp(app).mount()
