var draw = require('../draw');
var assert = require('assert');

describe("draw", function(){

    it("should draw three stars when called with array: '*','*', '*' ", function(){
        var result = draw(['*','*', '*']);
        assert.equal(result, '*\n*\n*\n' );
    });


});
