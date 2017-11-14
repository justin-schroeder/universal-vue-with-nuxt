const Vue = require('vue')

module.exports = function app () {
  return new Vue({
    template: `
    <div>
      <div>Current time is: <span id="time">{{ hours }}:{{ minutes }}:{{ seconds }}.{{ milliseconds }}</span></div>
      <small><span v-html="copy"></span> {{ year }} <a href="https://www.wearebraid.com">Braid LLC.</a> Absolutely No Rights Reserved.</small>
    </div>`,
    data () {
      return {
        date: new Date(),
        copy: '&copy;'
      }
    },
    computed: {
      year () {
        return this.date.getFullYear()
      },
      hours () {
        return this.date.getHours()
      },
      minutes () {
        return this.date.getMinutes()
      },
      seconds () {
        return this.date.getSeconds()
      },
      milliseconds () {
        return this.date.getMilliseconds()
      }
    },
    mounted() {
      setInterval(() => {this.date = new Date()}, 100)
    }
  })
}
