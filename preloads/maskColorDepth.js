async function modifyDefault (defaultVar, name, value) {
	if (Object.defineProperty) {
	  Object.defineProperty(defaultVar, name, {
			get: () => { return value }
		});
	} else if (Object.prototype.__defineGetter__) {
	  defaultVar.__defineGetter__(name, () => { return value });
	}
}

modifyDefault(screen, 'colorDepth', Math.round(Math.random()) == 0 ? 24 : 32);
