import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { PaginationHelper } from "./code.js"

describe('PaginationHelper', () => {
  it('should be correct for empty collection', () => {
    const empty = new PaginationHelper([], 10)

    assert.strictEqual(empty.pageCount(), 0)
    assert.strictEqual(empty.itemCount(), 0)
    assert.strictEqual(empty.pageIndex(0), -1)
    assert.strictEqual(empty.pageItemCount(0), -1)
  })
})
