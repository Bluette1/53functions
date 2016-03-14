var lowercase_letters = require('../lowercase_letters');
var assert = require('assert');

describe("lowercase_letters", function(){

    it("should return 'ea' when called with 'ZeBRa'", function(){
        var result = lowercase_letters('ZeBRa');
        assert.deepEqual(result, 'ea');
    });


});
