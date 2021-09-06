let assert = require("assert");
let isWeekday = require("../functions/IsWeekday");
//TestCase for isWeekday function
describe('This test is testing the isWeekday function' , function(){
    it('should return true for Monday' , function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it('should return false for Sunday' , function(){
        assert.equal(isWeekday('Sunday'), false);
    });
    it('should return false for Saturday' , function(){
        assert.equal(isWeekday('Saturday'), false);
    });
});