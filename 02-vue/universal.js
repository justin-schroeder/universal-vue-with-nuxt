const Vue = require('vue')

module.exports = function app () {
  return new Vue({
    template: `
    <div class="grid">
        <h3>
        Current time is:
        <span id="time">{{ hours }}:{{ minutes }}:{{ seconds }}.{{ milliseconds }}</span>
        </h3>
        <div class="info">
          <a id="logo" :href="url"></a>
          <small id="copyright">
            <span v-html="copy"></span>
            {{ year }}
            <a :href="url">Braid LLC.</a>
            <span id="rights">Absolutely No Rights Reserved.</span>
          </small>
        </div>
    </div>`,
    data () {
      return {
        date: new Date(),
        copy: '&copy;',
        url: 'https://www.wearebraid.com'
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
