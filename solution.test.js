import { getNumbers } from "./solution";

test("Different numbers, with solution", () => {
  const numbers = getNumbers([2, 5, 8, 14, 0], 10);
  expect(numbers).toEqual([2, 8]);
});

test("Different numbers, no solution", () => {
  const numbers = getNumbers([1, 2, 3, 4, 5], 10);
  expect(numbers).toEqual([]);
});

test("Same numbers, with solution", () => {
  const numbers = getNumbers([5, 5, 5, 5, 5], 10);
  expect(numbers).toEqual([5, 5]);
});

test("Same numbers with no solution", () => {
  const numbers = getNumbers([5, 5, 5, 5, 5], 6);
  expect(numbers).toEqual([]);
});
