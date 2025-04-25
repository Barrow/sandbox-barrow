// Inspired by/blatantly stolen from IronMonk's Always HP, thank you!
import { registerSettings } from "./settings.js";

const CONSTANTS = {
	DEBUG: false,
};

export let log = (...args) => {
	console.log("%cBarrow's Sandbox", "color:teal", " | ", ...args);
};

export let warn = (...args) => {
	if (CONSTANTS.DEBUG) {
		console.log(
			"%cBarrow's Sandbox",
			"color:teal",
			" | ",
			"%cWARN",
			"color:yellow",
			" | ",
			...args
		);
	}
};

export let debug = (...args) => {
	if (CONSTANTS.DEBUG) {
		console.log(
			"%cBarrow's Sandbox",
			"color:teal",
			" | ",
			"%cWARN",
			"color:yellow",
			" | ",
			...args
		);
	}
};

export let setting = (key) => {
	return game.settings.get("sandbox-barrow", key);
};

Hooks.on("init", () => {
	registerSettings();

	log("Initialized. Hello world!");
	debug("This is a debugging message.");
});
