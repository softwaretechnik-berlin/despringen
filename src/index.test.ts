import debounce from "./index";
import { jest } from "@jest/globals";

jest.useFakeTimers();

test("Debounces calls to it", () => {
  var used = -1;
  const f = debounce((i: number) => (used = i), 50);

  f(1);
  f(2);
  f(3);
  expect(used).toBe(-1);

  jest.advanceTimersByTime(50);

  expect(used).toBe(3);
});

test("Can take multiple arguments of different types", () => {
  var result = "";
  const f = debounce((str: string, i: number) => (result = `${str} = ${i}`), 50);

  f("i", 3);

  jest.advanceTimersByTime(50);

  expect(result).toBe("i = 3");
});
