import { debounce, debounceAsync } from "./index";
import { jest } from "@jest/globals";

jest.useFakeTimers();

test("Debounces calls to a function", () => {
  var used = -1;
  const f = debounce((i: number) => (used = i), 50);

  f(1);
  f(2);
  f(3);
  expect(used).toBe(-1);

  jest.advanceTimersByTime(50);

  expect(used).toBe(3);
});

test("Debounced functions take multiple arguments of different types", () => {
  var result = "";
  const f = debounce(
    (str: string, i: number) => (result = `${str} = ${i}`),
    50
  );

  f("i", 3);

  jest.advanceTimersByTime(50);

  expect(result).toBe("i = 3");
});

test("Debounces to a promise", async () => {
  var used = -1;
  const f = debounceAsync((i: number) => (used = i), 50);

  const promises: Promise<number>[] = [];

  promises.push(f(1));
  promises.push(f(2));
  promises.push(f(3));

  jest.advanceTimersByTime(50);

  const results = await Promise.all(promises);
  expect(results).toEqual([3, 3, 3]);
});
