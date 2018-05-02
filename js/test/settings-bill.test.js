describe('The Settings Bill Widget Test', function(){
  it('should take any number to update the call cost', function(){
    var callCostSet = settingsWidgetTest();

    callCostSet.callSets(5);

    assert.equal(5 , callCostSet.returnCall());
  })
  it('should take any number to update sms cost', function(){
    var smsCostSet = settingsWidgetTest();

    smsCostSet.smsSets(2.5);

    var smsCostSet2 = settingsWidgetTest();

    smsCostSet2.smsSets(2);

    assert.equal(2.5, smsCostSet.returnSms());
    assert.equal(2, smsCostSet2.returnSms());
  })
  it('should take any number to update the warning level', function(){
    var warningSetting = settingsWidgetTest();

    warningSetting.warningSets(2);

    var warningSetting1 = settingsWidgetTest();

    warningSetting1.warningSets(15.5);

    var warningSetting2 = settingsWidgetTest();

    warningSetting2.warningSets(2000);

    assert.equal(2, warningSetting.returnWarning());
    assert.equal(15.5, warningSetting1.returnWarning());
    assert.equal(2000, warningSetting2.returnWarning());
  })
  it('should take any number to update critical level', function(){
    var criticalSetting = settingsWidgetTest();

    criticalSetting.criticalSets(80.5);

    var criticalSetting1 = settingsWidgetTest();

    criticalSetting1.criticalSets(100);

    assert.equal(80.5, criticalSetting.returnCritical());
    assert.equal(100, criticalSetting1.returnCritical());
  })
  it('should return the total amount of calls', function(){
    var callBill = settingsWidgetTest();

    callBill.callSettings('call');
    callBill.callSettings('call');

    assert.equal(5.5, callBill.callsReturning());
  })
  it('should return the total amount of sms', function(){
    var smsBill = settingsWidgetTest();

    smsBill.smsSettings('sms');
    smsBill.smsSettings('sms');
    smsBill.smsSettings('sms');

    assert.equal(2.25, smsBill.smsReturning());
  })
  it('should return the total amount for both calls and sms', function(){
    var totalBill = settingsWidgetTest();

    totalBill.smsSettings('sms');
    totalBill.callSettings('call')
    totalBill.callSettings('call')
    totalBill.callSettings('call')

    assert.equal(9.0, totalBill.totalReturns());
  })
})
