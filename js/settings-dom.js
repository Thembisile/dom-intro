var radioButtons = document.querySelector(".billItemTypeRadio")
var callSettings = document.querySelector(".callCostSetting")
var smsSettings = document.querySelector(".smsCostSetting")
var warningSettings = document.querySelector(".warningLevelSetting")
var criticalSettings = document.querySelector(".criticalLevelSetting")
var addBtn = document.querySelector(".settingsAddBtn")
var updateBtn = document.querySelector(".updateSettings")
var callTotalElement = document.querySelector(".callTotalSettings")
var smsTotalElement = document.querySelector(".smsTotalSettings")
var totalElement = document.querySelector(".totalSettings")

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
