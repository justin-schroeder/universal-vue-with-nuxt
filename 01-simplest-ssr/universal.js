module.exports = {
  markup: `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Universal JS</title>
      <script>var module = {}</script>
      <script src="universal.js"></script>
      </head>
    <body>
      Current time is: <span id="time">{{ time }}</span>
      <script>
        setInterval(() => module.exports.render(), 100)
      </script>
    </body>
  </html>
  `,
  render: function (ssr) {
    let content = this.content()
    let markup = this.markup
    for (let field in content) {
      if (ssr) {
        markup = markup.replace(`{{ ${field} }}`, content[field])
      } else {
        document.getElementById(field).innerHTML = content[field]
      }
    }
    return ssr ? markup : true
  },
  content: function () {
    let date = new Date()
    return {
      time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`
    }
  }
}
