import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { sumPairs } from "./code.js"

describe('sumPairs', () => {
  it('should handle basic case', () => {
    assert.deepStrictEqual(sumPairs([11, 3, 7, 5], 10), [3, 7])
  })
  it('should handle negatives', () => {
    assert.deepStrictEqual(sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6])
  })
  it('should handle no matches', () => {
    assert.deepStrictEqual(sumPairs([20, -13, 40], -7), undefined)
  })
  it('should return leftmost match then there are multiple matches', () => {
    assert.deepStrictEqual(sumPairs([1, 2, 3, 4, 1, 0], 2), [1, 1])
  })
})
