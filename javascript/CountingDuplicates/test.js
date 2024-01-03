import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { duplicateCount } from "./code.js"

describe('duplicateCount', () => {
  it('empty string should have no duplicates', () => {
    assert.strictEqual(duplicateCount(""), 0)
  })
  it('aabbcde should return two duplicates ("a" and "b")', () => {
    assert.strictEqual(duplicateCount("aabbcde"), 2)
  })
  it('should ignore case', () => {
    assert.strictEqual(duplicateCount("aabBcde"), 2)
  })
  it('characters may not be adjacent', () => {
    assert.strictEqual(duplicateCount("Indivisibilities"), 2)
  })
})
