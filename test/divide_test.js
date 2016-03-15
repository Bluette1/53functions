var divide = require('../divide');
var assert = require('assert');

describe("divide", function(){
  it("should return 5", function(){
    var result = divide(10, 2);
    assert.equal(result, 5);
  });
});
