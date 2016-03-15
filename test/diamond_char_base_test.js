var diamond_char_base = require('../diamond_char_base') ;
var assert = require('assert');

describe('diamond_char_base', function(){
  it("return a diamond shape when called with two parameters", function(){
    var result = diamond_char_base('*', 5);
    assert.equal(result, '    * \n   * * \n  * * * \n * * * * \n* * * * * \n * * * * \n  * * * \n   * * \n    * \n     \n');
  });
});
