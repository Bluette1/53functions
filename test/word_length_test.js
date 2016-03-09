var word_length = require('../word_length');
var assert = require('assert');

describe("word_length", function(){

    it("should return 3 when called with 'I like codex.'", function(){
        var wordLengthObject = new word_length("I like codex.");
        var result = wordLengthObject.round_down();
        assert.equal(result, 3);
    });

    it("should return 4 when called with 'I like codex.'", function(){
      var wordLengthObj = new word_length("I like codex.");
        var result = wordLengthObj.round_up();
        assert.equal(result, 4);
    });

});
