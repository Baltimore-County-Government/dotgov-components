import * as Components from "./index";

test("should import without error", () => {
  // test to ensure that components are exported properly
  expect(typeof Components).toEqual("object");
});
