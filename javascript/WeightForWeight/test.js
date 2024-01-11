import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { orderWeight } from "./code.js"

describe('orderWeight', () => {
  it('should handle a list of weights', () => {
    assert.strictEqual(orderWeight('99 103'), '103 99')
  })
  it('should handle a list of weights', () => {
    assert.strictEqual(orderWeight('103 123 4444 99 2000'), '2000 103 123 4444 99')
  })
})
