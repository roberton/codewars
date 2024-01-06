import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { moveZeros } from "./code.js"

describe('moveZeros', () => {
  it('simple test', () => {
    assert.deepStrictEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
  })

  it('should handle non integers', () => {
    assert.deepStrictEqual(moveZeros([false,1,0,1,2,0,1,3,"a"]), [false,1,1,2,1,3,"a",0,0])
  })
})
