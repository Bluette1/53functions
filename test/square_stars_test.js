var square_stars = require('../square_stars');
var assert = require('assert');

describe("square_stars", function(){

    it("should draw a 4x4 square using stars", function(){
        var result = square_stars(['* * * *','* * * *','* * * *','* * * *']);
        assert.equal(result,'* * * *\n* * * *\n* * * *\n* * * *\n' );
    });


});
