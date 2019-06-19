Promise.prototype.finally = function () { }

const asyncReturnProto = Object.getPrototypeOf((async () => {})());
console.log('async returns global Promise?', asyncReturnProto === Promise.prototype)
console.log('Promise has finally?', 'finally' in Promise.prototype);
console.log('async has finally?', 'finally' in Object.getPrototypeOf((async () => {})()));

function sleep(ms, fail) {
  return new Promise((resolve, reject) => {
    setTimeout(fail ? reject : resolve, ms);
  });
}

async function sleepAsync(ms, fail) {
  await sleep(ms, fail);
}

function testPromise() {
  sleep(50, false)
    .then(() => console.log('[promise-fn][promise-calls][resolve] should work'))
    .catch(() => console.log('[promise-fn][promise-calls][resolve] should not fail [!!!]'))
    .finally(() => console.log('[promise-fn][promise-calls][resolve] should always print'));

  sleep(50, true)
    .then(() => console.log('[promise-fn][promise-calls][reject] should not work [!!!]'))
    .catch(() => console.log('[promise-fn][promise-calls][reject] should fail'))
    .finally(() => console.log('[promise-fn][promise-calls][reject] should always print'));
}

async function testAsync() {
  try {
    await sleepAsync(50, false);
    console.log('[async-fn][async-await-calls][resolve] should work');
  } catch (e) {
    console.log('[async-fn][async-await-calls][resolve] should not fail [!!!]');
  } finally {
    console.log('[async-fn][async-await-calls][resolve] should always print')
  }

  try {
    await sleepAsync(50, true);
    console.log('[async-fn][async-await-calls][reject] should not work [!!!]');
  } catch (e) {
    console.log('[async-fn][async-await-calls][reject] should fail');
  } finally {
    console.log('[async-fn][async-await-calls][reject] should always print')
  }
}

function testAsyncPromise() {
  sleepAsync(50, false)
    .then(() => console.log('[async-fn][promise-calls][resolve] should work'))
    .catch(() => console.log('[async-fn][promise-calls][resolve] should not fail [!!!]'))
    .finally(() => console.log('[async-fn][promise-calls][resolve] should always print'));

  sleepAsync(50, true)
    .then(() => console.log('[async-fn][promise-calls][reject] should not work [!!!]'))
    .catch(() => console.log('[async-fn][promise-calls][reject] should fail'))
    .finally(() => console.log('[async-fn][promise-calls][reject] should always print'));
}

async function testPromiseAsync() {
  try {
    await sleep(50, false);
    console.log('[promise-fn][async-await-calls][resolve] should work');
  } catch (e) {
    console.log('[promise-fn][async-await-calls][resolve] should not fail [!!!]');
  } finally {
    console.log('[promise-fn][async-await-calls][resolve] should always print')
  }

  try {
    await sleep(50, true);
    console.log('[promise-fn][async-await-calls][reject] should not work [!!!]');
  } catch (e) {
    console.log('[promise-fn][async-await-calls][reject] should fail');
  } finally {
    console.log('[promise-fn][async-await-calls][reject] should always print')
  }
}

(async function run () {
  try {
    testPromise();

    await sleep(1000);

    testAsync();

    await sleep(1000);

    testAsyncPromise();

    await sleep(1000);

    testPromiseAsync();
  } catch (e) {
    console.error('Oops!', e);
  }
})();

