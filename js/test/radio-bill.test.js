describe('The Radio Bill Widget', function(){
  it('should return 2.75 for a radio button of call selected and Add each time the Add button is pressed', function(){
    var callRadio = RadioBillWidget();

    callRadio.callsRadioBtn('call');
    callRadio.callsRadioBtn('call');
    callRadio.callsRadioBtn('call');
    callRadio.callsRadioBtn('call');
    callRadio.callsRadioBtn('call');

    assert.equal(13.75, callRadio.callsReturn())
  })
  it('should return 0.75 for a radio button of sms selected and add each time the Add button is pressed', function(){
    var smsRadio = RadioBillWidget();

    smsRadio.smsRadioBtn('sms');
    smsRadio.smsRadioBtn('sms');

    assert.equal(1.50, smsRadio.smsReturn())
  })
  it('should add and return the total of calls and sms selected', function(){
    var totalRadio1 = RadioBillWidget();

    totalRadio1.smsRadioBtn('sms');
    totalRadio1.callsRadioBtn('call')
    totalRadio1.callsRadioBtn('call')
    assert.equal(6.25, totalRadio1.returnTotalRadio())
  })
})
