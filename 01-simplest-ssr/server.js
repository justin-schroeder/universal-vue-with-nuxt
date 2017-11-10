const http = require('http')
const page = require('./universal')
const fs = require('fs');
const path = require('path');

let server = http.createServer((req, res) => {
  if (fs.existsSync(path.basename(req.url))) {
    res.writeHead(200, {'Content-Type': 'application/javascript'})
    res.end(fs.readFileSync(path.basename(req.url), 'utf8'))
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(page.render(true))
  }
})

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(3000)
