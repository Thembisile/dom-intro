describe('The Radio Bill Widget', function(){
  it('should return 2.75 for a radio button of call selected', function(){
    var callRadio = radioBillWidget();

    callRadio.callsRadioBtn('call');

    assert.equal(2.75, callRadio.callsReturn())
  })
  it('should return 0.75 for a radio button of sms selected', function(){
    var smsRadio = radioBillWidget();

    smsRadio.smsRadioBtn('sms');

    assert.equal(0.75, smsRadio.smsReturn())
  })
})
