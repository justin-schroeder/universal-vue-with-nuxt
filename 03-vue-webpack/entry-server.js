import bootApp from './app'

export default context => {
  const { app } = bootApp()
  return app
}
