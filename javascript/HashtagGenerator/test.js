import { test, describe, it } from "node:test";
import assert from "node:assert/strict";
import generateHashtag from "./code.js";

describe("codewars tests", () => {
  it("Sample tests", () => {
    assert.strictEqual(generateHashtag(""), false, "Expected an empty string to return false")
  })
})

test("will pass", () => {
  assert.ok("hello world");
});
