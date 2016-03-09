var longest_word = require('../longest_word');
var assert = require('assert');

describe("longest_word", function(){

    it("should return 'Xylophone' when called with 'Xylophone is a long word.'", function(){
        var result = longest_word("Xylophone is a long word.");
        assert.equal(result, "Xylophone");
    });


});
