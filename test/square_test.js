var square = require('../square');
var assert = require('assert');

describe("square", function(){

    it("should draw a 4x4 rectangle using stars", function(){
        var result = square('$');
        assert.equal(result, console.log('$ $ $ $\n$     $\n$     $\n$ $ $ $') );
    });


});
