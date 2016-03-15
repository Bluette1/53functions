var diamond = require('../diamond');
var assert = require('assert');

describe("diamond", function(){

    it("should draw a diamond of base 5 using stars", function(){
        var result = diamond();
        assert.equal(result, '    *\n   * *\n  * * *\n * * * *\n* * * * *\n * * * *\n  * * *\n   * *\n    *\n');
    });


});
