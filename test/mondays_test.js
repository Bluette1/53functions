var mondays = require('../mondays');
var assert = require('assert');

describe("mondays", function(){
  it("should return 52 when called with 2016", function(){
    var result = mondays(2016);
    assert.deepEqual(result, 52);
  });
});
