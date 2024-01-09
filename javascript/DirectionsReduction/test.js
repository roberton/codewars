import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { dirReduc } from "./code.js"

describe('dirReduc', () => {
  it('["NORTH", "SOUTH", "EAST", "WEST"] -> []', () => {
    assert.deepStrictEqual(dirReduc(["NORTH", "SOUTH", "EAST", "WEST"]), [])
  })
  it('["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"] -> ["WEST"]', () => {
    assert.deepStrictEqual(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
  })
  it('simple loop should be returned unchanged', () => {
    assert.deepStrictEqual(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
  })
  it('pairs of directions should be reduced to nothing', () => {
    assert.deepStrictEqual(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])
  })
})
