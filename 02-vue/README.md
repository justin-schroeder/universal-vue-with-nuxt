# 01-vue
--------

In this example we recreate 01-vanilla with a Vue. In order to do this we use
the `vue-server-render` package. For client side hydration we add some hacky
little shims like `var module = {}` and `var require = function () { return Vue }`.
Also, to avoid needing any kind of build process, we are using Vue directly from a
CDN on the front end.

To run it:

```sh
npm install
npm start
```

Then browse [http://localhost:3000](http://localhost:3000).
