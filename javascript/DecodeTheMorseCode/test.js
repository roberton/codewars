import { describe, it } from "node:test"
import assert from "node:assert/strict"
import { decodeMorse } from "./code.js"

describe("Sample tests", function(){
  it("Example from description", () => {  
    assert.strictEqual(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
  })
  
  it("Leading and trailing spaces", () => {  
    assert.strictEqual(decodeMorse('   .... . -.--   '), 'HEY')
  })

})
