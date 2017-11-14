<template>
  <div>
    <timer :date="date" />
    <small><span v-html="copy"></span> {{ date.getFullYear() }} Braid LLC. Absolutely no rights reserved.</small>
  </div>
</template>

<script>
import Timer from './Timer'

export default {
  components: {
    timer: Timer
  },
  data () {
    return {
      copy: '&copy;',
      date: new Date()
    }
  },
  mounted () {
    setInterval(() => {this.date = new Date()}, 100)
  }
}
</script>
