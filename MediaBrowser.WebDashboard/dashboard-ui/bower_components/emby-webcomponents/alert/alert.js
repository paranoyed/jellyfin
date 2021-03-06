define(["dialog", "globalize"], function(dialog, globalize) {
    "use strict";
    return function(text, title) {
        var options;
        options = "string" == typeof text ? {
            title: title,
            text: text
        } : text;
        var items = [];
        return items.push({
            name: globalize.translate("sharedcomponents#ButtonGotIt"),
            id: "ok",
            type: "submit"
        }), options.buttons = items, dialog(options).then(function(result) {
            return "ok" === result ? Promise.resolve() : Promise.reject()
        })
    }
});