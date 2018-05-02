function RadioBillWidget(){

  var callTotals = 0;
  var smsTotals = 0;
  var totalRadio = 0;

  function callsRadioBtn(billItemType){
      if (billItemType === "call"){
          callTotals += 2.75
      }
    }

    function callsReturn(){
      return callTotals;
    }

    function smsRadioBtn(billItemType){
        if (billItemType === "sms"){
          smsTotals += 0.75;
      }
    }

    function smsReturn(){
      return smsTotals;
      }
    function returnTotalRadio(){
      return totalRadio = smsTotals + callTotals;
    }
    return {
      callsRadioBtn,
      smsRadioBtn,
      callsReturn,
      smsReturn,
      returnTotalRadio
    }
  }
