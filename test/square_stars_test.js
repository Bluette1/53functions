var square_stars = require('../square_stars');
var assert = require('assert');

describe("square_stars", function(){

    it("should draw a 4x4 rectangle using stars", function(){
        var result = square_stars(['* * * *', '*     *', '*     *', '* * * *']);
        assert.equal(result, console.log('* * * *\n*     *\n*     *\n* * * *') );
    });


});
