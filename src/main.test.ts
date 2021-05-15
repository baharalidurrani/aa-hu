import { addFn } from "./main";

it("add test that passes", () => {
  expect(addFn(1, 3)).toBe(4);
});

it("add function test that fails", () => {
  expect(addFn(9, 1)).toBe(9);
});
