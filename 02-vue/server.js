const http = require('http')
const fs = require('fs')
const renderer = require('vue-server-renderer').createRenderer()
const template = fs.readFileSync('./index.html', 'utf-8')
const app = require('./universal.js')

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/universal.js":
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(fs.readFileSync('./universal.js', 'utf-8'))
      break;
    default:
      renderer.renderToString(app())
        .then(html => res.end(template.replace('{{ app }}', html)))
        .catch(err => {throw err})
  }
})

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(3000)
