'use strict';

exports['default'] = null;
globalThis.setFoo = value => (exports['default'] = value);

module.exports = exports['default'];
