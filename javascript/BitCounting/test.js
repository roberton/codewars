import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { countBits } from "./code.js"

describe('countBits', () => {
  it('0 -> 0', () => {
    assert.strictEqual(countBits(0), 0)
  })
  it('4 -> 1', () => {
    assert.strictEqual(countBits(4), 1)
  })
  it('1234 -> 5', () => {
    assert.strictEqual(countBits(1234), 5)
  })
})
