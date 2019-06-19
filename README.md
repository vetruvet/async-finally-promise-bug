## What is this?

Simple script to demonstrate a bug with async functions and the `core-js` `Promise.prototype.finally` polyfill.

## How to run?

`$ npm install`
`$ npm run webpack`

Open `index.html` in a browser (either the file or through a server like `python -m http.server`) and open devtools or run `node out.js`.

## Expected Output

If you see `[!!!]` something went terribly wrong.

```
async returns global Promise? true
Promise has finally? true
async has finally? true
[promise-fn][promise-calls][resolve] should work
[promise-fn][promise-calls][resolve] should always print
[promise-fn][promise-calls][reject] should fail
[promise-fn][promise-calls][reject] should always print
[async-fn][async-await-calls][resolve] should work
[async-fn][async-await-calls][resolve] should always print
[async-fn][async-await-calls][reject] should fail
[async-fn][async-await-calls][reject] should always print
[async-fn][promise-calls][resolve] should work
[async-fn][promise-calls][reject] should fail
[promise-fn][async-await-calls][resolve] should work
[promise-fn][async-await-calls][resolve] should always print
[promise-fn][async-await-calls][reject] should fail
[promise-fn][async-await-calls][reject] should always print
````