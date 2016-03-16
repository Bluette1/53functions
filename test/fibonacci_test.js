var fibonacci = require('../fibonacci');
var assert = require('assert');

describe("fibonacci", function(){
  it("should return 24 if called with 4", function(){
    var result = fibonacci(4);
    assert.deepEqual(result, 24);
  });
});
