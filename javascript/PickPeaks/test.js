import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { pickPeaks } from "./code.js"

describe('pickPeaks', () => {
  // it('should handle empty list', () => {
  //   assert.deepStrictEqual(pickPeaks([]), { pos: [], peaks: [] })
  // })
  // it('should handle first example with one peak', () => {
  //   assert.deepStrictEqual(pickPeaks([0, 1, 2, 5, 1, 0]), { pos: [3], peaks: [5] })
  // })
  // it('should handle two peaks', () => {
  //   assert.deepStrictEqual(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]), { pos: [3, 7], peaks: [6, 3] })
  // })
  it('should handle many peaks', () => {
    assert.deepStrictEqual(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]), { pos: [2,7,14,20], peaks: [5,6,5,5] })
  })
})
