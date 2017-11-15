<template>
  <h3>
    Current time is: <span id="time">{{ hours }}:{{ minutes }}:{{ seconds }}.{{ milliseconds }}</span>
  </h3>
</template>

<script>
export default {
  props: ['date'],
  computed: {
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
  }
}
</script>
