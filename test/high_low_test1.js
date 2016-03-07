var high_low= require('../high_low1');
var assert = require('assert');

describe("high_low1", function(){

    it("should return [5, 1] when called with [1, 2, 3, 4, 5]", function(){
      var high_lowObject = new high_low([1, 2, 3, 4, 5]);
        var result = high_lowObject.highAndLow();
        assert.deepEqual(result, [5, 1]);
    });



});
