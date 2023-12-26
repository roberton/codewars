import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { incrementString, calcNumberSuffixIndex } from "./code.js"

describe('calcNumberSuffixIndex', () => {
  it('foo', () => {
    assert.strictEqual(calcNumberSuffixIndex(['foo']), -1)
  })
  it('foo123', () => {
    assert.strictEqual(calcNumberSuffixIndex(['foo', '123']), 1)
  })
  it('foo12obar34', () => {
    assert.strictEqual(calcNumberSuffixIndex(['foo', '12', 'obar', '34']), 3)
  })
  it('1', () => {
    assert.strictEqual(calcNumberSuffixIndex(['1']), 0)
  })
})

describe('incrementString', () => {
  it('foo -> foo1', () => {
    assert.strictEqual(incrementString('foo'), 'foo1') 
  })
  it('foobar23 -> foobar24', () => {
    assert.strictEqual(incrementString('foobar23'), 'foobar24')
  })
  it('foo0042 -> foo0043', () => {
    assert.strictEqual(incrementString('foo0042'), 'foo0043')
  })
  it('fo99obar99 -> fo99obar100', () => {
    assert.strictEqual(incrementString('fo99obar99'), 'fo99obar100')
  })
  it('1 -> 2', () => {
    assert.strictEqual(incrementString('1'), '2')
  })
})

describe("Tests suite", () => {
  function doTest(input, expected) {
    const actual = incrementString(input);
    assert.strictEqual(actual, expected, `for string: "${input}"\n`);
  }

  it("sample tests", () => {
    doTest("foobar000", "foobar001");
    doTest("foobar999", "foobar1000");
    doTest("foobar00999", "foobar01000");
    doTest("foo", "foo1");
    doTest("foobar001", "foobar002");
    doTest("foobar1", "foobar2");
    doTest("1", "2");
    doTest("009", "010");
    doTest("fo99obar99", "fo99obar100");
  });
});
