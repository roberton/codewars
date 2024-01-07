import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { humanReadable } from "./code.js"

describe('humanReadable', () => {
  it('should handle midnight', () => {
    assert.strictEqual(humanReadable(0), '00:00:00')
  })
  it('should handle 59 seconds correctly', () => {
    assert.strictEqual(humanReadable(59), '00:00:59')
  })
  it('should handle 1 minute correctly', () => {
    assert.strictEqual(humanReadable(60), '00:01:00')
  })
  it('should handle 1 hour correctly', () => {
    assert.strictEqual(humanReadable(3600), '01:00:00')
  })
  it('should handle max value correctly', () => {
    assert.strictEqual(humanReadable(359999), '99:59:59')
  })
})
