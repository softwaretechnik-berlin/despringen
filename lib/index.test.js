"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
var globals_1 = require("@jest/globals");
globals_1.jest.useFakeTimers();
test("Changes the loading message", function () {
    var used = -1;
    var f = index_1.default(function (i) { return (used = i); }, 50);
    f(1);
    f(2);
    f(3);
    expect(used).toBe(-1);
    globals_1.jest.advanceTimersByTime(50);
    expect(used).toBe(3);
});