describe('the Calculate Bill', function(){
  it('should calculate the total bill string of calls made', function(){
    assert.equal(calculateBtnClicked('call'), '2.75');
  })
  it('should calculate the total bill string of sms made', function(){
    assert.equal(calculateBtnClicked('sms'), '0.75');
  })
  it('should calculate the total bill string of calls and sms made', function(){
    assert.equal(calculateBtnClicked('call,sms'), '3.50');
  })
})
