var count_words = require('../count_words');
var assert = require('assert');

describe("count_words", function(){

    it("should return 4 when called with 'I have four words.'", function(){
        var result = count_words('I have four words.');
        assert.equal(result, 4);
    });

});
