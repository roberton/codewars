import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { rot13 } from "./code.js"

describe('rot13', () => {
  it("should work for 'EBG13 rknzcyr.'", () => {
    assert.strictEqual(rot13('EBG13 rknzcyr.'), 'ROT13 example.')
  })
  it("should work for 'This is my first ROT13 excercise!'", () => {
    assert.strictEqual(rot13('This is my first ROT13 excercise!'), 'Guvf vf zl svefg EBG13 rkprepvfr!')
  })
})
