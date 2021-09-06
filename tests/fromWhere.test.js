let assert = require("assert");
let fromWhere = require("../functions/fromWhere");
//TestCase for fromWhere function
describe('This test is testing the fromWhere function' , function(){
    it('should return "Bellville"' , function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it('should return "Cape Town"' , function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });
    it('should return "Some other place!"' , function(){
        assert.equal(fromWhere('CC'), 'Some other place!');
    });
});