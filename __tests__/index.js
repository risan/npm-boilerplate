/* global expect:false, test:false */
import foo from "../src";

test("it resolves to bar", async () => {
  expect.assertions(1);

  const result = await foo("bar");

  expect(result).toBe("bar");
});
