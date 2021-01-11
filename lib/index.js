"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounceAsync = exports.debounce = void 0;
var defaultMs = 300;
function debounce(f, ms) {
    if (ms === void 0) { ms = defaultMs; }
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
exports.debounce = debounce;
function debounceAsync(f, ms) {
    if (ms === void 0) { ms = defaultMs; }
    var unresolved = [];
    var debounced = debounce(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            var result_1 = f.apply(void 0, args);
            unresolved.forEach(function (executor) { return executor.resolve(result_1); });
        }
        catch (e) {
            unresolved.forEach(function (executor) { return executor.reject(e); });
        }
        // empty the array
        unresolved.length = 0;
    }, ms);
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            unresolved.push({ resolve: resolve, reject: reject });
            debounced.apply(void 0, args);
        });
    };
}
exports.debounceAsync = debounceAsync;
