"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var globals_1 = require("@jest/globals");
globals_1.jest.useFakeTimers();
test("Debounces calls to a function", function () {
    var used = -1;
    var f = index_1.debounce(function (i) { return (used = i); }, 50);
    f(1);
    f(2);
    f(3);
    expect(used).toBe(-1);
    globals_1.jest.advanceTimersByTime(50);
    expect(used).toBe(3);
});
test("Debounced functions take multiple arguments of different types", function () {
    var result = "";
    var f = index_1.debounce(function (str, i) { return (result = str + " = " + i); }, 50);
    f("i", 3);
    globals_1.jest.advanceTimersByTime(50);
    expect(result).toBe("i = 3");
});
test("Debounces to a promise", function () { return __awaiter(void 0, void 0, void 0, function () {
    var f, promises, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                f = index_1.debounceAsync(function (i) { return i; }, 50);
                promises = [];
                promises.push(f(1));
                promises.push(f(2));
                promises.push(f(3));
                globals_1.jest.advanceTimersByTime(50);
                return [4 /*yield*/, Promise.all(promises)];
            case 1:
                results = _a.sent();
                expect(results).toEqual([3, 3, 3]);
                return [2 /*return*/];
        }
    });
}); });
test("Flattens promises", function () { return __awaiter(void 0, void 0, void 0, function () {
    var f, promises, results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                f = index_1.debounceAsync(function (i) { return Promise.resolve(i); }, 50);
                promises = [];
                promises.push(f(1));
                promises.push(f(2));
                promises.push(f(3));
                globals_1.jest.advanceTimersByTime(50);
                return [4 /*yield*/, Promise.all(promises)];
            case 1:
                results = _a.sent();
                expect(results).toEqual([3, 3, 3]);
                return [2 /*return*/];
        }
    });
}); });
