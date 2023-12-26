import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { solution } from "./code.js"

describe('solution', () => {
  it('-1 -> 0', () => {
    assert.strictEqual(solution(-1), 0)
  })
  it('0 -> 0', () => {
    assert.strictEqual(solution(0), 0)
  })
  it('10 -> 23', () => {
    assert.strictEqual(solution(10), 23)
  })
  it('11 -> 33', () => {
    assert.strictEqual(solution(11), 33)
  })
})
