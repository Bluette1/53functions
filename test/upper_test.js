var assert = require('assert');
//TODO - import the module after you created it.
var upper = require('../upper');

describe("upper", function(){

    it("should uppercase 'ZEBRAS' ", function(){
        //var result = upper("zebras");
        var result = upper("zebras");
        assert.equal(result, "ZEBRAS");
    });

});
