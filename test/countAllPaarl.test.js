let assert = require("assert");
let countAllPaarl = require("../functions/countAllPaarl");
//TestCase for countAllPaarl function
describe('This test is testing the countAllPaarl function' , function(){
    it('should show the number 3 for the total numebr of number plates from Paarl' , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });
    it('should show the number 2 for the total numebr of number plates from Paarl' , function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });
});