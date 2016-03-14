var draw = require('../draw');
var assert = require('assert');

describe("draw", function(){

    it("should return draw '***' when called with array '*','*', '*' ", function(){
        var result = draw(['*','*', '*']);
        assert.equal(result, console.log('\n*\n*\n*') );
    });


});
