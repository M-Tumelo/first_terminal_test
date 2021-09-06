let assert = require("assert");
let transportFee = require("../functions/transportFee");
//TestCase for transportFee function
describe('This test is testing the transportFee function' , function(){
    it('should return "R20" for the argument "morning"' , function(){
        assert.equal(transportFee('morning'), 'R20');
    });
    it('should return "R10" for the argument "afternoon"' , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });
    it('should return free for the argument "nightshift"' , function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
});