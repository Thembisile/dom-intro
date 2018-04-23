// get a reference to the sms or call radio buttons
// var radioButtons = document.querySelector(".billItemTypeRadio")
// // get refences to all the settings fields
// var callSettings = document.querySelector(".callCostSetting")
// var smsSettings = document.querySelector(".smsCostSetting")
// var warningSettings = document.querySelector(".warningLevelSetting")
// var criticalSettings = document.querySelector(".criticalLevelSetting")
// //get a reference to the add button
// var addBtn = document.querySelector(".settingsAddBtn")
// //get a reference to the 'Update settings' button
// var updateBtn = document.querySelector(".updateSettings")
// // create a variables that will keep track of all the settings
//
// // create a variables that will keep track of all three totals.
// var callTotalElement = document.querySelector(".callTotalSettings")
// var smsTotalElement = document.querySelector(".smsTotalSettings")
// var totalElement = document.querySelector(".totalSettings")
//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
function settingsWidgetTest(){

      var call = 2.75;
      var sms = 0.75;
      var warning = 40;
      var critical = 60;
      var allTotal = 0;
      // var callSet = callSettings.value
      // var smsSet = smsSettings.value
      // var warningSet = warningSettings.value
      // var criticalSet = criticalSettings.value
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
//       allTotal = calls + smss;
//       callTotalElement.innerHTML = calls.toFixed(2);
//       smsTotalElement.innerHTML = smss.toFixed(2);
//       totalElement.innerHTML = allTotal.toFixed(2);
//
//
//       if (allTotal >= critical){
//           // adding the danger class will make the text red
//           totalElement.classList.add("danger");
//       }
//       else if (allTotal >= warning){
//           totalElement.classList.add("warning");
//       }
//     }
//   }
// }
// addBtn.addEventListener('click', billSettings);
//
// updateBtn.addEventListener('click', updateSettings);
