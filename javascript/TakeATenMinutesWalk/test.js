import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { isValidWalk } from "./code.js"

describe('isValidWalk', () => {
  it('should be true for 10 steps that lead back to the start', () => {
    assert.strictEqual(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), true);
  })
  it('should be false for more than 10 steps', () => {
    assert.strictEqual(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), false);
  })
  it('should be false for a single step', () => {
    assert.strictEqual(isValidWalk(['w']), false);
  })
})
