var calc_chain = require('../calc_chain');
var assert = require('assert');

describe('calc_chain', function(){
it('should return 27', function(){
  var calc = new calc_chain();
  var result = calc.add(1, 2).multiply(9).value();
  assert.equal(result, 27);
});

});
