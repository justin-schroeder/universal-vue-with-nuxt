import bootApp from './app'

// client-specific bootstrapping logic...

const { app } = bootApp()

// this assumes App.vue template root element has `id="app"`
app.$mount('#app')
