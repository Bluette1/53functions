var start = require('../start');
var assert = require('assert');

describe("start", function(){

    it("should return 'c' when called with 'I love coding at codex.'", function(){
        var result = start('I love coding at codex.');
        assert.equal(result, 'c');
    });


});
