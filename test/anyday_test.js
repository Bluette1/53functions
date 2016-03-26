var anyday = require('../anyday');
var assert = require('assert');

describe("anyday", function(){
  it("should return 52 when called with 2016 as year and monday as day", function(){
    var result = anyday(2016,'Monday');
    assert.deepEqual(result, 52);
  });
});
