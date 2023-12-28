import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { likes } from "./code.js"

describe('likes', () => {
  it('[] --> "no one likes this"', () => {
    assert.strictEqual(likes([]), 'no one likes this')
  })
  it('["Peter"] --> "Peter likes this"', () => {
    assert.strictEqual(likes(['Peter']), 'Peter likes this')
  })
  it('["Jacob", "Alex"] --> "Jacob and Alex like this"', () => {
    assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this')
  })
  it('["Max", "John", "Mark"] --> "Max, John and Mark like this"', () => {
    assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this')
  })
  it('["Alex", "Jacob", "Mark", "Max"] --> "Alex, Jacob and 2 others like this"', () => {
    assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this')
  })
})
