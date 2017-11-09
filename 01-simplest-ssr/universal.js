if (typeof window !== 'undefined') {
  var module = {}
  var count = 0
}

module.exports = {
  markup: `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Universal JS</title>
    </head>
    <body>
      Rendered by: <span id="app">{{ page }}</span>
      <script src="universal.js"></script>
    </body>
  </html>`,
  render: function (ssr) {
    return ssr ? this.markup.replace('{{ page }}', this.content(ssr)) : this.content(ssr)
  },
  content: function (ssr) {
    return ssr ? 'Server Side' : `Front End ${++count}`
  }
}

if (typeof window !== 'undefined') {
  setInterval(() => document.getElementById('app').innerHTML = module.exports.render(), 400)
}
