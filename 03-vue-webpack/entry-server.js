import bootApp from './universal'

export default context => {
  const { app } = bootApp()
  return app
}
