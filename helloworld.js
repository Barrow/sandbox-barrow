export let log = (...args) => console.log("%cBarrow's Sandbox | ", "color:GreenYellow", ...args);


Hooks.on("init", () => {
	log("Initialized. Hello world!");
});
