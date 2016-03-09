var ends = require('../ends');
var assert = require('assert');

describe("ends", function(){

    it("should return 'g' when called with 'I love coding, cooking and reading interesting books.'", function(){
        var result = ends('I love coding, cooking and reading interesting books.');
        assert.equal(result, 'g');
    });


});
