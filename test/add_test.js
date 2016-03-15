var add = require('../add');
var assert = require('assert');

describe("add", function(){
  it("should return 5", function(){
    var result = add(2, 3);
    assert.equal(result, 5);
  });
});
