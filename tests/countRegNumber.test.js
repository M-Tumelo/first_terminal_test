let assert = require("assert");
let countAllRegNumber = require("../functions/countRegNumber");
//TestCase for countAllRegNumber function
describe('This test is testing the countAllRegNumber function' , function(){
    it('should return the number of registrations in a string, i.e., this string should return 2' , function(){
        var regCount = countRegNumber('HM 12 BN GP, Just 8 L')
        assert.equal(regCount, 2);
    });
    it('should return the number of registrations in a string, i.e., this string should return 0' , function(){
        var regCount = countRegNumber('')
        assert.equal(regCount, 0);
    });
    it('should return the number of registrations in a string, i.e., this string should return 3' , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });
    it('should return the number of registrations in a string, i.e., this string should return 1' , function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });
});