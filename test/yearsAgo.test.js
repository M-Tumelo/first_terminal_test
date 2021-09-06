let assert = require("assert");
let yearsAgo = require("../functions/yearsAgo");
//TestCase for yearsAgo function
describe('This test is testing the yearsAgo function' , function(){
    it('should return the number of years passed since 1976' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
    });
    it('should return the number of years passed since 2000' , function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));    
    });
});