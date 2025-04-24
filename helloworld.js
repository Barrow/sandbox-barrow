// Inspired by/stolen from IronMonk's Always HP, thank you!
import { registerSettings } from "./settings.js";
export let log = (...args) => console.log("%cBarrow's Sandbox | ", "color:GreenYellow", ...args);


Hooks.on("init", () => {
    registerSettings();

	log("Initialized. Hello world!");
});
