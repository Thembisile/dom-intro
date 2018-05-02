describe('The text-bill widget Test', function(){
  it('should return the total amount for a string of calls made', function(){
    var callBillTotal1 = TextBill();

    callBillTotal1.callBillTotal('call');

    var callBillTotal2 = TextBill();

    callBillTotal2.callBillTotal('call');
    callBillTotal2.callBillTotal('call');
    callBillTotal2.callBillTotal('call');

    assert.equal(2.75, callBillTotal1.returnCalls());
    assert.equal(8.25, callBillTotal2.returnCalls());
    assert.equal(0.00, callBillTotal2.returnSms());
  })
  it('should return the total amount for a string of sms sent', function(){
    var smsBillTotal1 = TextBill();

    smsBillTotal1.smsBillTotal('sms');
    smsBillTotal1.smsBillTotal('sms');

    var smsBillTotal2 = TextBill();

    smsBillTotal2.smsBillTotal('sms');
    smsBillTotal2.smsBillTotal('sms');
    smsBillTotal2.smsBillTotal('sms');

    assert.equal(1.5, smsBillTotal1.returnSms());
    assert.equal(2.25, smsBillTotal2.returnSms());
    assert.equal(0.00, smsBillTotal2.returnCalls());
  })
  it('should do nothing for a string of both call and sms', function(){
    var callAndSms = TextBill();

    callAndSms.smsBillTotal('call,sms');

    assert.equal(0.00, callAndSms.returnSms())
  })
  it('should add the total for a string of sms and calls', function(){
    var totalCostBill = TextBill();

    totalCostBill.smsBillTotal('sms');
    totalCostBill.callBillTotal('call');

    assert.equal(3.5, totalCostBill.returnTotal());
  })
});
