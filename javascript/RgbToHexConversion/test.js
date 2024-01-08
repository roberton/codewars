import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { rgb } from "./code.js"

describe('rgb', () => {
  it('255, 255, 255 --> "FFFFFF', () => {
    assert.strictEqual(rgb(255, 255, 255), 'FFFFFF')
  })
  it('0, 0, 0       --> 000000', () => {
    assert.strictEqual(rgb(0, 0, 0), '000000')
  })
  it('148, 0, 211   --> 9400D3', () => {
    assert.strictEqual(rgb(148, 0, 211), '9400D3')
  })
  it('should handle negative values', () => {
    assert.strictEqual(rgb(0, 0, -20), '000000')
  })
  it('should handle values greater than 255', () => {
    assert.strictEqual(rgb(0, 0, 256), '0000FF')
  })
})
