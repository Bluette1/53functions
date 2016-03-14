var square_param_base = require('../square_param_base');
var assert = require('assert');

describe("square_param_base", function(){

    it("should draw a 4x4square of using stars", function(){
        var result = square_param_base('*', 4);
        assert.equal(result,'* * * * \n* * * * \n* * * * \n* * * * \n');
    });


});
