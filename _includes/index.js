"use strict";

mdc.autoInit();

Array.prototype.cycle = function(str) {
    var i = this.indexOf(str);
    if (i === -1) return undefined;
    return this[(i + 1) % this.length];
};

var handleTheme = function handleTheme() {
    switch (localStorage.getItem("theme")) {
        case "light":
            $(".theme-toggle--svg").html("<path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z\"/><circle cx=\"12\" cy=\"12\" r=\"2.5\"/>");
            $("body").removeClass("setting--dark");
            break;

        case "dark":
            $(".theme-toggle--svg").html("<path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z\"/>");
            $("body").addClass("setting--dark");
            break;

        default:
            $(".theme-toggle--svg").html("<path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M11 7l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L13 7h-2zm-.15 5.65L12 9l1.15 3.65h-2.3zM20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48z\"/>");
            var hours = new Date().getHours();
            $("body").toggleClass("setting--dark", hours <= 6 || hours >= 20 || window.matchMedia("(prefers-color-scheme: dark)").matches || window.matchMedia("(-ms-high-contrast: white-on-black)").matches);
    }
};

if (["auto", "light", "dark"].indexOf(localStorage.getItem("theme")) === -1) localStorage.setItem("theme", "auto");
handleTheme();
$("body").addClass("setting--animate-colours");
$(".theme-toggle").click(function() {
    localStorage.setItem("theme", ["auto", "light", "dark"].cycle(localStorage.getItem("theme")));
    handleTheme();
});