<template>
  <div class="page">
    <navigation />
    <header class="header"><h1>{{ person.first }} {{ person.last }}</h1></header>
    <div class="main-content" v-html="person.description"></div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      person: state => state.content.people.yeager
    })
  },
  fetch ({store}) {
    return store.dispatch('content/loadPeople')
  },
  components: {
    navigation: Navigation
  }
}
</script>
