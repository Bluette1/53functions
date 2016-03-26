var cricket= require('../cricket');
var assert = require('assert');

describe("cricket", function(){
  it("should return 12.5", function(){
    var result = cricket(3.33333);
    assert.equal(result, 13.5);
  });
});
