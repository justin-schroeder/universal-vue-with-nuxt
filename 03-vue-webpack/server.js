const http = require('http')
const fs = require('fs')
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('./.bundles/vue-ssr-server-bundle.json')
const template = fs.readFileSync('./index.html', 'utf-8')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // recommended
  // template, // (optional) page template
  // clientManifest // (optional) client build manifest
})

const server = http.createServer((req, res) => {
  const context = {url: req.url}
  renderer.renderToString(context)
    .then(html => res.end(html))
    .catch(err => console.error(err))
})

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(3000)
