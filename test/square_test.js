var square = require('../square');
var assert = require('assert');

describe("square", function(){

    it("should draw a 4x4 square using stars", function(){
        var result = square('$');
        assert.equal(result, '$ $ $ $\n$ $ $ $\n$ $ $ $\n$ $ $ $\n');
    });


});
