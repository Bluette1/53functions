var assert = require('assert');
var reverse = require('../reverse');


describe("reverse", function(){

    it("should return the reverse  - 'sarbez' when called with string 'zebras'", function(){
        var result = reverse("zebras");
        assert.equal(result, "sarbez")
    });

});
