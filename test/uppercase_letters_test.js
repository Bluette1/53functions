var uppercase_letters = require('../uppercase_letters');
var assert = require('assert');

describe("uppercase_letters", function(){

    it("should return 'ZBR' when called with 'ZeBRa'", function(){
        var result = uppercase_letters('ZeBRa');
        assert.deepEqual(result, 'ZBR');
    });


});
