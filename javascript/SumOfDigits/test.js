import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { digitalRoot } from "./code.js"

describe('digitalRoot', () => {
  it('16  -->  1 + 6 = 7', () => {
    assert.strictEqual(digitalRoot(16), 7)
  })
  it('942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6', () => {
    assert.strictEqual(digitalRoot(942), 6)
  })
})
