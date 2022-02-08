const debounce = (cb, ms) => {
  let timer;
  return (...args) => {
    clearTimeout (timer);
    timer = setTimeout (() => cb (...args), ms);
  };
};

const throttle = (cb, ms) => {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout (() => {
      cb (...args);
    }, ms);
  };
};

const normalFunc = (a, b) => console.log (a + b);

const debouncedFunc = debounce (normalFunc, 1000);
const throttledFunc = throttle (normalFunc, 1000);

const sleep = ms => new Promise (resolve => setTimeout (resolve, ms));

(() => {
  debouncedFunc (3, 5); // debounced "skipped".
  debouncedFunc (200, 300); // debounced "skipped".
  sleep (400);
  debouncedFunc (400, 700); // debounced "skipped".
  sleep (300);
  debouncedFunc (200, 1000); // last call to debounce function will run and will print 1200 to the console.

  throttledFunc (700, 800); // throttled to later point in time, it will print 1500 after 1 second.
  throttledFunc (100, 100); // skipped because there was a throttled timer still waiting.
  sleep (500);
  throttledFunc (100, 200); // skipped because there was a throttled timer still waiting.
}) ();
