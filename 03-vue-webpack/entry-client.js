import bootApp from './universal'

// client-specific bootstrapping logic...

const { app } = bootApp()

// this assumes App.vue template root element has `id="app"`
app.$mount('#app')
