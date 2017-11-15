<template>
  <div class="grid">
    <timer :date="date" />
    <div class="info">
      <a id="logo" :href="url"></a>
      <small id="copyright"><span v-html="copy"></span> {{ date.getFullYear() }} <a :href="url">Braid LLC.</a> <span id="rights">Absolutely no rights reserved.</span></small>
    </div>
  </div>
</template>

<script>
import Timer from './components/Timer'

export default {
  components: {
    timer: Timer
  },
  data () {
    return {
      url: 'https://www.wearebraid.com',
      copy: '&copy;',
      date: new Date()
    }
  },
  mounted () {
    setInterval(() => {this.date = new Date()}, 100)
  }
}
</script>
