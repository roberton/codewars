import { test, describe, it } from "node:test"
import assert from "node:assert/strict"
import generateHashtag from "./code.js"

describe("codewars tests", () => {
  it("Expected an empty string to return false", () => {
    assert.strictEqual(generateHashtag(""), false)
  })
  it("Still an empty string", () => {
    assert.strictEqual(generateHashtag(" ".repeat(200)), false)
  })
  it("Expected a Hashtag (#) at the beginning.", () => {
    assert.strictEqual(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag")
  })
  it("Should handle a single word.", () => {
    assert.strictEqual(generateHashtag("Codewars"), "#Codewars")
  })
  it("Other sample tests", () => {
    assert.strictEqual(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
    assert.strictEqual(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
    assert.strictEqual(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
    assert.strictEqual(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
    assert.strictEqual(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
    assert.strictEqual(generateHashtag("a".repeat(140)), false, "Too long")
  })
})
