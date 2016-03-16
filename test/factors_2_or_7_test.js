var factors_2_or_7 = require('../factors_2_or_7');
var assert = require('assert');

describe("factors_2_or_7", function(){
  it("should return '1'if called with 3", function(){
    var result = factors_2_or_7(3);
    assert.deepEqual(result, [1, 2]);
  });
});
