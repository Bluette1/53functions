var ascii_upper= require('../ascii_upper');
var assert = require('assert');

describe("ascii_upper", function(){
  it("should return 2015", function(){
    var result = ascii_upper();
    assert.deepEqual(result, 2015);
  });
});
