var avg= require('../avg');
var assert = require('assert');

describe("avg", function(){

  it("should return 4 when called with 'I like codex.'", function(){
    var wordLengthObj = new avg("I like codex.");
      var result = wordLengthObj.round_up();
      assert.equal(result, 4);
  });


});
