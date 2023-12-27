import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { findOdd } from "./code.js"

describe('findOdd', () => {
  it('[7] -> 7', () => {
    assert.strictEqual(findOdd([7]), 7)
  })
  it('[0] -> 0', () => {
    assert.strictEqual(findOdd([0]), 0)
  })
  it('[1,1,2] -> 2', () => {
    assert.strictEqual(findOdd([1,1,2]), 2)
  })
  it('[0,1,0,1,0] -> 0', () => {
    assert.strictEqual(findOdd([0,1,0,1,0]), 0)
  })
})
