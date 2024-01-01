import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { findOutlier } from "./code.js"

describe('findOutlier', () => {
  it('[0, 1, 2] -> 1', () => {
    assert.strictEqual(findOutlier([0, 1, 2]), 1)
  })
  it('[1, 2, 3] -> 2', () => {
    assert.strictEqual(findOutlier([1, 2, 3]), 2)
  })
  it('[2, 4, 0, 100, 4, 11, 2602, 36] -> 11 (the only odd number)', () => {
    assert.strictEqual(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]), 11)
  })
  it('[160, 3, 1719, 19, 11, 13, -21] -> 160 (the only even number)', () => {
    assert.strictEqual(findOutlier([160, 3, 1719, 19, 11, 13, -21]), 160)
  })
})

describe('findOutlier tricky tests', () => {
  it('[-1, -2, -3] -> -2', () => {
    assert.strictEqual(findOutlier([-1, -2, -3]), -2)
  })
})

