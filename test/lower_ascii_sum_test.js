var lower_ascii_sum= require('../lower_ascii_sum');
var assert = require('assert');

describe("lower_ascii_sum", function(){
  it("should return 198", function(){
    var result = lower_ascii_sum("ZeBRa");
    assert.deepEqual(result, 198);
  });
});
