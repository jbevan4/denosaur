import { assertArrayIncludes, assertEquals, delay } from "./deps.ts";

// Simple name and function, compact form, but not configurable
Deno.test("hello world #1", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});

// Fully fledged test definition, longer form, but configurable (see below)
Deno.test({
  name: "hello world #2",
  fn: () => {
    const x = 1 + 2;
    assertEquals(x, 3);
  },
});

Deno.test("hello world", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
  assertArrayIncludes([1, 2, 3, 4, 5, 6], [3], "Expected 3 to be in the array");
});

Deno.test("async hello world", async () => {
  const x = 1 + 2;

  // await some async task
  await delay(600);

  if (x !== 3) {
    throw Error("x should be equal to 3");
  }
});
