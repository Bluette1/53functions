var tri_char = require('../tri_char');
var assert = require('assert');

describe("tri_char", function(){

    it("should draw a rectangle of base 4 when called with '*'", function(){
        var result = tri_char('*');
        assert.equal(result, '   *\n * * *\n* * * *\n');
    });


});
