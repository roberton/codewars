import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { score } from "./code.js"

describe('score', () => {
  it('should handle worthless rolls', () => {
    assert.strictEqual(score([2, 3, 4, 6, 2]), 0)
  })
  it('should handle triplet of 4s', () => {
    assert.strictEqual(score([4, 4, 4, 3, 3]), 400)
  })
  it('should handle triplet of 1s', () => {
    assert.strictEqual(score([1, 2, 3, 1, 1]), 1000)
  })
  it('should handle mixed set of triplet and a 1', () => {
    assert.strictEqual(score([1, 2, 2, 4, 2]), 300)
  })
  it('should handle four 6s', () => {
    assert.strictEqual(score([6, 6, 6, 6, 2]), 600)
  })
  it('should handle five 1s', () => {
    assert.strictEqual(score([1, 1, 1, 1, 1]), 1200)
  })
})
