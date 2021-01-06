import debounce from "./index";
import { jest } from "@jest/globals";

jest.useFakeTimers();

test("Changes the loading message", () => {
  var used = -1;
  const f = debounce((i: number) => (used = i), 50);

  f(1);
  f(2);
  f(3);
  expect(used).toBe(-1);

  jest.advanceTimersByTime(50);

  expect(used).toBe(3);
});
