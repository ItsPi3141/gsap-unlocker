const clubPlugins = [
	"CustomBounce",
	"CustomWiggle",
	"DrawSVGPlugin",
	"InertiaPlugin",
	"GSDevTools",
	"MorphSVGPlugin",
	"MotionPathHelper",
	"Physics2DPlugin",
	"PhysicsPropsPlugin",
	"ScrambleTextPlugin",
	"ScrollSmoother",
	"SplitText",
];

String.fromCharCode = new Proxy(String.fromCharCode, {
	apply(target, thisArg, argumentsList) {
		let shouldModify = false;
		try {
			new Function("''()")();
		} catch (e) {
			for (const plugin of clubPlugins) {
				if (e.stack.toLowerCase().includes(plugin.toLowerCase())) {
					shouldModify = true;
					break;
				}
			}
		}
		return target.apply(thisArg, shouldModify ? [] : argumentsList);
	},
});
