import { test, describe, it } from "node:test"
import assert from "node:assert/strict"
import { spinWords, spinWordIfLongEnough } from "./code.js"

describe('spinWordIfLongEnough', () => {
  it('should not spin short words', () => {
    assert.strictEqual(spinWordIfLongEnough('DoNotSpin', 10), 'DoNotSpin')
  })
  it('should spin long enough words', () => {
    assert.strictEqual(spinWordIfLongEnough('DoSpin', 6), 'nipSoD')
  })
})

describe("Spinning words", () => {
  it("Sample tests",()=>{
    assert.strictEqual(spinWords("Welcome"), "emocleW");
    assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
    assert.strictEqual(spinWords("This is a test"), "This is a test");
    assert.strictEqual(spinWords("This is another test"), "This is rehtona test");
    assert.strictEqual(spinWords("You are almost to the last test"), "You are tsomla to the last test");
    assert.strictEqual(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
    assert.strictEqual(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");
  });
});
