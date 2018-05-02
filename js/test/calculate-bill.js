function CalculateBtnClicked(billValue){
  var billValues = billValue.split(",");
  var billTotal = 0;
  for (var i=0;i<billValues.length;i++){
      var billItem = billValues[i].trim();
      if (billItem === "call"){
          billTotal += 2.75;
      }
      else if (billItem === "sms"){
          billTotal += 0.75;
      }
  }
  return billTotal.toFixed(2);
}
