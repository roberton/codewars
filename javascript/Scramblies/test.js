import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { scramble } from "./code.js"

describe('scramble', () => {
  it('should handle first example', () => {
    assert.strictEqual(scramble('rkqodlw', 'world'), true)
  })
  it('should handle codewars example', () => {
    assert.strictEqual(scramble('cedewaraaossoqqyt', 'codewars'), true)
  })
  it('should handle simple false example', () => {
    assert.strictEqual(scramble('katas', 'steak'), false)
  })
  it('should not rely on reused letters', () => {
    assert.strictEqual(scramble('scriptjavx', 'javascript'), false)
  })
})
