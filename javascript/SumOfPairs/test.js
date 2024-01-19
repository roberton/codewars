import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { sumPairs } from "./code.js"

describe('sumPairs', () => {
  it('should do something', () => {
    assert.strictEqual(sumPairs([11, 3, 7, 5], 10), [3, 7])
  })
})
