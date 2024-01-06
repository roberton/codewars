import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { alphabetPosition, letterPosition } from "./code.js"

describe('letterPosition', () => {
  it('a -> 1', () => {
    assert.strictEqual(letterPosition('a'), 1)
  })
})

describe('alphabetPosition', () => {
  it("The sunset sets at twelve o'clock. -> '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'", () => {
    assert.strictEqual(alphabetPosition("The sunset sets at twelve o'clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
  })
})
