var letter_map = require('../letter_map');
var assert = require('assert');

describe("letter_map", function(){

    it("should return 'I I l love c coding codex a at' when called with I love coding at codex.", function(){
        var result = letter_map('I love coding at codex.');
        assert.deepEqual(result, {"I" : ['I'], "l" : ['love'], "c" : ['coding', 'codex'], "a": ['at']});
    });


});
