var factors2 = require('../factors2');
var assert = require('assert');

describe("factors2", function(){
  it("should return '2, 1'if called with 3", function(){
    var result = factors2(3);
    assert.deepEqual(result, [1, 2]);
  });
});
