describe('the Calculate Bill', function(){
  it('should calculate the total bill string of calls made', function(){
    assert.equal(CalculateBtnClicked('call'), '2.75');
  })
  it('should calculate the total bill string of sms made', function(){
    assert.equal(CalculateBtnClicked('sms'), '0.75');
  })
  it('should calculate the total bill string of calls and sms made', function(){
    assert.equal(CalculateBtnClicked('call,sms'), '3.50');
  })
})
