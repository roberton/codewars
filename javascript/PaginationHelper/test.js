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
  it('should handle 24 items with 10 per page', () => {
    const empty = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 10)

    assert.strictEqual(empty.pageCount(), 3)
    assert.strictEqual(empty.itemCount(), 24)

    assert.strictEqual(empty.pageItemCount(0), 10)
    assert.strictEqual(empty.pageItemCount(1), 10)
    assert.strictEqual(empty.pageItemCount(2), 4)
    assert.strictEqual(empty.pageItemCount(3), -1)

    assert.strictEqual(empty.pageIndex(22), 2)
    assert.strictEqual(empty.pageIndex(40), -1)
    assert.strictEqual(empty.pageIndex(-1), -1)
    assert.strictEqual(empty.pageIndex(3), 0)
  })
  it('should handle 5 items with 10 per page', () => {
    const empty = new PaginationHelper([1, 2, 3, 4, 5], 10)

    assert.strictEqual(empty.pageCount(), 1)
    assert.strictEqual(empty.itemCount(), 5)

    assert.strictEqual(empty.pageItemCount(0), 5)

    assert.strictEqual(empty.pageIndex(0), 0)
    assert.strictEqual(empty.pageIndex(4), 0)
    assert.strictEqual(empty.pageIndex(5), -1)
  })
  it('should handle 10 empty items with 5 per page', () => {
    const collection = new PaginationHelper(new Array(10), 5);

    assert.strictEqual(collection.pageCount(), 2)
    assert.strictEqual(collection.itemCount(), 10)

    assert.strictEqual(collection.pageItemCount(0), 5)

    assert.strictEqual(collection.pageIndex(0), 0)
  })
})
