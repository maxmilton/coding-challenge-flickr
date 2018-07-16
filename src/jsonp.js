// From another package but without the unnecessary debug package + minor changes.
// Original: https://github.com/webmodules/jsonp/blob/master/index.js

/* eslint-disable */

/**
 * Callback index.
 */

let count = 0;

/**
 * Noop function.
 */

const noop = () => {};

/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - prefix {String} qs parameter (`__jp`)
 *  - name {String} qs parameter (`prefix` + incr)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {string} url
 * @param {object|Function} [opts] options / callback
 * @param {Function} [fn] callback
 */

function jsonp(url, opts, fn) {
  if (typeof opts === 'function') {
    fn = opts;
    opts = {};
  }
  if (!opts) opts = {};

  const prefix = opts.prefix || '__jp';

  // use the callback name that was passed if one was provided.
  // otherwise generate a unique name by incrementing our counter.
  const id = opts.name || (prefix + (count += 1));

  const param = opts.param || 'callback';
  const timeout = opts.timeout != null ? opts.timeout : 60000;
  const enc = encodeURIComponent;
  const target = document.getElementsByTagName('script')[0] || document.head;
  let script;
  let timer;

  function cleanup() {
    if (script.parentNode) script.parentNode.removeChild(script);
    window[id] = noop;
    if (timer) clearTimeout(timer);
  }

  function cancel() {
    if (window[id]) {
      cleanup();
    }
  }

  if (timeout) {
    timer = setTimeout(() => {
      cleanup();
      if (fn) fn(new Error('Timeout'));
    }, timeout);
  }

  window[id] = function (data) {
    cleanup();
    if (fn) fn(null, data);
  };

  // add qs component
  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
  url = url.replace('?&', '?');

  // create script
  script = document.createElement('script');
  script.src = url;
  target.parentNode.insertBefore(script, target);

  return cancel;
}

/**
 * Module exports.
 */

module.exports = jsonp;
