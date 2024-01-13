import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { perimeter } from "./code.js"

describe('perimeter', () => {
  it('0 -> 4', () => {
    assert.strictEqual(perimeter(0), 4)
  })
  it('5 -> 80', () => {
    assert.strictEqual(perimeter(5), 80)
  })
  it('30 -> 14098308', () => {
    assert.strictEqual(perimeter(30), 14098308)
  })
})
