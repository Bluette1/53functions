var occurs_most = require('../occurs_most');
var assert = require('assert');

describe("occurs_most",function(){
  it("should return 'c' when called with 'I love cracking code at codex'", function(){
    var result = occurs_most('I love cracking code at codex');
    assert.equal(result, 'c');
  });

});
