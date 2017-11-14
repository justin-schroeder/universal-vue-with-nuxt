<template>
  <div>
    <div>Current time is: {{ hours }}:{{ minutes }}:{{ seconds }}.{{ milliseconds }}</div>
  </div>
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
