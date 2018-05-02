var radioButton = document.querySelector(".billItemTypeRadio")
var radioAddButton = document.querySelector(".radioBillAddBtn")
var callsTotalElems =  document.querySelector(".callTotalTwo")
var smsTotalElems = document.querySelector(".smsTotalTwo")
var totalCostElems = document.querySelector(".totalTwo")

var callTotals = 0;
var smsTotals = 0;

function checkedRadioBtn(){
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value
    if (billItemType === "call"){
        callTotals += 2.75
    }

    else if (billItemType === "sms"){
        smsTotals += 0.75;
    }
    callsTotalElems.innerHTML = callTotals.toFixed(2);
    smsTotalElems.innerHTML = smsTotals.toFixed(2);
    var totalCosts = callTotals + smsTotals;
    totalCostElems.innerHTML = totalCosts.toFixed(2);

    if (totalCosts >= 50){
        totalCostElems.classList.add("danger");
    }
    else if (totalCosts >= 30){
        totalCostElems.classList.add("warning");
    }
  }
}
radioAddButton.addEventListener('click', checkedRadioBtn);
