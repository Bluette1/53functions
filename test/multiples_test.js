var multiples = require('../multiples');
var assert = require('assert');

describe('multiples', function(){
var multiplesObj = new multiples(3);
it('should return 3,6,9,12,15,18,21,24,27', function(){
var result = multiplesObj.list(9);
  assert.deepEqual(result, [3,6,9,12,15,18,21,24,27]);
});

it('should return 30', function(){
  var result = multiplesObj.count();
  assert.equal(result, 30);
});
});
