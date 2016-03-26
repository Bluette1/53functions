var filter= require('../filter');
var assert = require('assert');

describe("filter", function(){
  it("should return list of odd numbers", function(){
    var result = filter([1, 13, 17, 4, 33, 19, 8 , 49, 45, 23,67,22,99,84, 23, 94]);
    assert.deepEqual(result, [1,13,17,33,19,49,45,23,67,99,23]);
  });
});
