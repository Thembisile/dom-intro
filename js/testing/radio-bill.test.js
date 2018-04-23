describe('The Radio Bill Widget', function(){
  it('should return 2.75 for a radio button of call selected and Add each time the Add button is pressed', function(){
    var callRadio = radioBillWidget();

    callRadio.callsRadioBtn('call');
    callRadio.callsRadioBtn('call');
    callRadio.callsRadioBtn('call');
    callRadio.callsRadioBtn('call');
    callRadio.callsRadioBtn('call');

    assert.equal(13.75, callRadio.callsReturn())
  })
  it('should return 0.75 for a radio button of sms selected and add each time the Add button is pressed', function(){
    var smsRadio = radioBillWidget();

    smsRadio.smsRadioBtn('sms');
    smsRadio.smsRadioBtn('sms');

    assert.equal(1.50, smsRadio.smsReturn())
  })
})
