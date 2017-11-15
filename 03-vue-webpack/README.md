# 03-vue-webpack
----------------

In this example we recreate 01-vanilla with a Vue, but this time we are using
webpack to create a server bundle and a client manifest. This allows us to write
our Vue application with best Vue practices like using `.vue` files.

The downside of using webpack to compile your server and client code is the
increased complexity of the build process. This example represents the bare
minimum required to get a stable version of vue running on the server and in
the browser.

To run it:

```sh
npm install
npm run dev
```

Then browse [http://localhost:3000](http://localhost:3000).
