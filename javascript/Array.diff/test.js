import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { arrayDiff } from "./code.js"

describe('arrayDiff', () => {
  it('[1,2],[1] -> [2]', () => {
    assert.deepStrictEqual(arrayDiff([1,2],[1]), [2])
  })
  it('[1,2,2,2,3],[2]) -> [1,3]', () => {
    assert.deepStrictEqual(arrayDiff([1,2,2,2,3],[2]), [1,3])
  })
})
