const http = require('http')
const page = require('./universal')
const fs = require('fs');

let server = http.createServer((req, res) => {
  switch (req.url) {
    case "/universal.js":
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(fs.readFileSync('universal.js', 'utf8'))
      break
    default:
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end(page.render(true))
  }
})

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(3000)
