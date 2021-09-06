let assert = require("assert");
let regCheck = require("../functions/regCheck");
//TestCase for regCheck function
describe('This test is testing the countAllFromTown function' , function(){
    it('should return true DC 55 YU GP, when matched to an GP number plate' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    it('should not return true DC 55 YU GP, when matched to an EC identify' , function(){
        assert.notEqual(regCheck('DC 55 YU GP', 'EC'), true);
    });
    it('should return true 5566 L, when matched to an L number plate' , function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    });
});