import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { pigIt } from "./code.js"

describe('pigIt', () => {
  it('Pig latin is cool -> igPay atinlay siay oolcay', () => {
    assert.strictEqual(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
  })
  it('This is my string -> hisTay siay ymay tringsay', () => {
    assert.strictEqual(pigIt('This is my string'), 'hisTay siay ymay tringsay')
  })
  it('Hello world ! -> elloHay orldway !', () => {
    assert.strictEqual(pigIt('Hello world !'), 'elloHay orldway !')
  })
})
