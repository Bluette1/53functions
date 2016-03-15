var tri = require('../tri');
var assert = require('assert');

describe("tri", function(){

    it("should draw a rectangle of base 4 using stars", function(){
        var result = tri();
        assert.equal(result, '   *\n  * *\n * * *\n* * * *\n');
    });


});
