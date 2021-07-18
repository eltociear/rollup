System.register('bundle', [], function (exports) {
	'use strict';
	return {
		execute: function () {

			let foo = exports('default', null);
			globalThis.setFoo = value => (foo = exports('default', value));

		}
	};
});
