var billTypeText = document.querySelector(".billTypeText");
var textTotalAddBtn = document.querySelector(".addToBillBtn");
var totalCostElem = document.querySelector(".totalOne")
var callsTotalElem = document.querySelector(".callTotalOne")
var smsTotalElem = document.querySelector(".smsTotalOne")

var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

function textBillTotal(){
   var billTypeEntered = billTypeText.value.trim();
   if (billTypeEntered === "call"){
       callsTotal += 2.75
  }
  else if (billTypeEntered === "sms"){
         smsTotal += 0.75;
  }

  callsTotalElem.innerHTML = callsTotal.toFixed(2);
  smsTotalElem.innerHTML = smsTotal.toFixed(2);
  var totalCost = callsTotal + smsTotal;
  totalCostElem.innerHTML = totalCost.toFixed(2);

  if (totalCost >= 30){
     totalCostElem.classList.add("danger");
  }
  else if (totalCost >= 20){
     totalCostElem.classList.add("warning");
  }
}
textTotalAddBtn.addEventListener('click', textBillTotal);
