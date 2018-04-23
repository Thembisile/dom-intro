// get a reference to the sms or call radio buttons
var radioButtons = document.querySelector(".billItemTypeRadio")
// get refences to all the settings fields
var callSettings = document.querySelector(".callCostSetting")
var smsSettings = document.querySelector(".smsCostSetting")
var warningSettings = document.querySelector(".warningLevelSetting")
var criticalSettings = document.querySelector(".criticalLevelSetting")
//get a reference to the add button
var addBtn = document.querySelector(".settingsAddBtn")
//get a reference to the 'Update settings' button
var updateBtn = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.
var callTotalElement = document.querySelector(".callTotalSettings")
var smsTotalElement = document.querySelector(".smsTotalSettings")
var totalElement = document.querySelector(".totalSettings")
//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
var call = 2.75;
var sms = 0.75;
var allCalls = 0;
var allSms = 0;
var warning = 40;
var critical = 60;
var allTotal = 0;

function updateSettings(){
  var callSet = callSettings.value
  var smsSet = smsSettings.value
  var warningSet = warningSettings.value
  var criticalSet = criticalSettings.value
   warning = parseFloat(warningSet)
   critical = parseFloat(criticalSet)
   call = parseFloat(callSet)
   sms = parseFloat(smsSet)



}

var calls = 0;
var smss = 0;

function billSettings (){
  var billSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");

  if (billSettings){
    var billItemTypeWithSettings = billSettings.value

    if(allTotal >= critical){

    }
    else{
      if (billItemTypeWithSettings === 'call'){
        calls += call;
      }

      else if (billItemTypeWithSettings === 'sms'){
        smss += sms;
      }
      allTotal = calls + smss;
      callTotalElement.innerHTML = calls.toFixed(2);
      smsTotalElement.innerHTML = smss.toFixed(2);
      totalElement.innerHTML = allTotal.toFixed(2);


      if (allTotal >= critical){
          // adding the danger class will make the text red
          totalElement.classList.add("danger");
      }
      else if (allTotal >= warning){
          totalElement.classList.add("warning");
      }
    }


  }
}
addBtn.addEventListener('click', billSettings);

updateBtn.addEventListener('click', updateSettings);
