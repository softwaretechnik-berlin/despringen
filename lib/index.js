"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debounce(f, ms) {
    if (ms === void 0) { ms = 300; }
    var timeoutId = undefined;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(function () {
            f.apply(void 0, args);
        }, ms);
    };
}
exports.default = debounce;
