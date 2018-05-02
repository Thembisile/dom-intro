function SettingsWidget(){

    var call = 2.75;
    var sms = 0.75;
    var warning = 40;
    var critical = 60;
    var allTotal = 0;

    function warningSets(warningSet){

      warning = parseFloat(warningSet);
    }
    function returnWarning(){
      return warning;
    }
    function criticalSets(criticalSet){
      critical = parseFloat(criticalSet);
    }
    function returnCritical(){
      return critical;
    }
    function callSets(callSet){
       call = parseFloat(callSet);
    }
    function returnCall(){
      return call;
    }
    function smsSets(smsSet){
      sms = parseFloat(smsSet);
    }
    function returnSms(){
      return sms;
    }

    var calls = 0;
    var smss = 0;

    function billSettings (){
      var allTotal = calls + smss;
      if(allTotal >= critical){
        //shouldn't add anything when threshold is reached
        }
      }

    function callSettings(billSettings){
        if (billSettings === 'call'){
            calls += call;
      }
    }
    function callsReturning(){
      return calls;
    }
    function smsSettings(billSettings){
      if (billSettings === 'sms'){
          smss += sms;
      }
    }

    function smsReturning(){
              return smss;
    }
    function totalReturns(){
      var allTotal = calls + smss;
      return allTotal;

    }
    return {
      warningSets,
      criticalSets,
      callSets,
      smsSets,
      returnWarning,
      returnCritical,
      returnCall,
      returnSms,
      billSettings,
      callSettings,
      smsSettings,
      smsReturning,
      callsReturning,
      totalReturns
    }
  }
