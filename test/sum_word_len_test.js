var sum_word_len = require('../sum_word_len');
var assert = require('assert');

describe("sum_word_len", function(){

    it("should return 9 when called with 'I love code.'", function(){
        var result = sum_word_len("I love code.");
        assert.equal(result, 9);
    });


});
