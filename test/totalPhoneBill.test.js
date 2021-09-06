let assert = require("assert");
let totalPhoneBill = require("../functions/totalPhoneBill");
//TestCase for totalPhoneBill function
describe('This test is testing the totalPhoneBill function' , function(){
    it('should show R7.45 for the phone bill' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));    });
    it('should show R3.40 for the phone bill' , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));    });
    it('should show R1.30 for the phone bill' , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));    });
});