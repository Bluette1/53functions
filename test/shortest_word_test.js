var shortest_word = require('../shortest_word');
var assert = require('assert');

describe("shortest_word", function(){

    it("should return 'a' when called with 'Xylophone is a long word.'", function(){
        var result = shortest_word("Xylophone is a long word.");
        assert.equal(result, "a");
    });


});
