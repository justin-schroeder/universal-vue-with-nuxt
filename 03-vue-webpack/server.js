const http = require('http')
const fs = require('fs')
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('./.bundles/vue-ssr-server-bundle.json')
const clientManifest = require('./.bundles/vue-ssr-client-manifest.json')
const template = fs.readFileSync('./index.html', 'utf-8')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
})

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/manifest.js':
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(fs.readFileSync('./.bundles/manifest.js', 'utf-8'))
      break;
    case '/main.js':
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(fs.readFileSync('./.bundles/main.js', 'utf-8'))
    default:
      renderer.renderToString({url: req.url})
        .then(html => res.end(html))
        .catch(err => console.error(err))
  }
})

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(3000)
