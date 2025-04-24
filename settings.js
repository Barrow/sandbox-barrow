// Inspired by/stolen from IronMonk's Always HP, thank you!
export const registerSettings = function () {
    let modulename = "sandbox-barrow";

    let loadoptions = {
        'everyone': game.i18n.localize("SANDBOX.everyone"),
        'gmsonly': game.i18n.localize("SANDBOX.gmsonly"),
        'players': game.i18n.localize("SANDBOX.players"),
    };

    game.settings.register(modulename, "load-option", {
        name: "Placeholder Setting",
        scope: "world",
        config: true,
        default: "everyone",
        type: String,
        choices: loadoptions,
        requiresReload: true
    });
}