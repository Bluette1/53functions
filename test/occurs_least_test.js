var occurs_least = require('../occurs_least');
var assert = require('assert');

describe("occurs_least",function(){
  it("should return 'x' when called with 'I love cracking code at codex'", function(){
    var result = occurs_least('I love cracking code at codex...');
    assert.equal(result, "l v r k n g t x");
  });

});
