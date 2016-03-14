var high_low= require('../high_low');
var assert = require('assert');

describe("high_low", function(){

    it("should return [1, 5] when called with [1, 2, 3, 4, 5]", function(){
        var result = high_low([1, 2, 3, 4, 5]);
        assert.deepEqual(result, [5, 1])
    });



});
