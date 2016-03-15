var diamond_base = require('../diamond_base') ;
var assert = require('assert');

describe('diamond_base', function(){
  it("return a diamond shape when called with '*'", function(){
    var result = diamond_base('*');
    assert.equal(result, '    *\n   * *\n  * * *\n * * * *\n* * * * *\n * * * *\n  * * *\n   * *\n    *\n');
  });
});
