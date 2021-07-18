let foo = null;
globalThis.setFoo = value => (foo = value);
export { foo as default };
