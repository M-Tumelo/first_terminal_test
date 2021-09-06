let assert = require("assert");
let countAllFromTown = require("../functions/countAllFromTown");
//TestCase for countAllFromTown function
describe('This test is testing the countAllFromTown function' , function(){
    it('should show you number plates from Kuilsriver should contain 1' , function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        assert.equal(fromKuilsriver, 1)
    });
    it('should you number plates from Stellies should contain 3' , function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.equal(fromStellies, 3)
    });
});