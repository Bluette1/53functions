var ascii_params = require('../ascii_params');
var assert = require('assert');

describe("ascii_params", function(){
  it("should return 477 when called with 'Nadia'", function(){
    var result = ascii_params('Nadia');
    assert.deepEqual(result, 477);
  });
});
