module.exports = {
	description: 'supports live-bindings for default exports when using default export mode',
	options: {
		// TODO Lukas mutable default exports are not supported when using default export mode.
		output: { name: 'bundle', exports: 'default' }
	}
};
