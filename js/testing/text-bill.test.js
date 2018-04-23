describe('The text-bill widget Test', function(){
  it('should return 2.75 for a string of call', function(){
    var callBillTotal1 = addTextTotal();

    callBillTotal1.callBillTotal('call');

    assert.equal(2.75, callBillTotal1.returnCalls());
  })
  it('should return 0.75 for a string of sms', function(){
    var smsBillTotal1 = addTextTotal();

    smsBillTotal1.smsBillTotal('sms');

    assert.equal(0.75, smsBillTotal1.returnSms());
  })
  it('should do nothing for a string of both call and sms', function(){  
  })
});
