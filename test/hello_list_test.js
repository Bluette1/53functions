var hello_list = require('../hello_list');
var assert = require('assert');

describe("hello_list", function(){

    it("should return ['hello world', 'hello world', 'hello world'] when called with 3", function(){
        var result = hello_list(3);
        assert.deepEqual(result, ['hello world', 'hello world', 'hello world']);
    });


});
