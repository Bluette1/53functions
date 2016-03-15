var calulate_all = require('../calculate_all');
var assert = require('assert');

describe("calulate_all", function(){
  it("should return 6", function(){
    var result = calulate_all(2, 3, '*');
    assert.equal(result, 6);
  });
});
