<template>
  <div>
    <div id="time">Current time is: {{ hours }}:{{ minutes }}:{{ seconds }}.{{ milliseconds }}</div>
    <small><span v-html="copy"></span> {{ year }} Braid LLC. Absolutely no rights reserved.</small>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: new Date(),
      copy: '&copy;'
    }
  },
  head () {
    return {
      title: '04-Example: Nuxt'
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
  mounted () {
    setInterval(() => { this.date = new Date() }, 100)
  }
}
</script>
