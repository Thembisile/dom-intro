// get a reference to the sms or call radio buttons
var radioButton = document.querySelector(".billItemTypeRadio")
//get a reference to the add button
var radioAddButton = document.querySelector(".radioBillAddBtn")
//create a variable that will keep track of the total bill
var callsTotalElems =  document.querySelector(".callTotalTwo")
var smsTotalElems = document.querySelector(".smsTotalTwo")
var totalCostElems = document.querySelector(".totalTwo")
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var callTotal = 0;
var smsTotal = 0;

function checkedRadioBtn(){
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  console.log(checkedRadioBtn);
  if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value
      // billItemType will be 'call' or 'sms'
    if (billItemType === "call"){
        callsTotal += 2.75
    }

    else if (billItemType === "sms"){
        smsTotal += 0.75;
    }
    console.log(callsTotal);
    //update the totals that is displayed on the screen.
    callsTotalElems.innerHTML = callsTotal.toFixed(2);
    smsTotalElems.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElems.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 80){
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    }
    else if (totalCost >= 50){
        totalCostElem.classList.add("warning");
    }

}
}
radioAddButton.addEventListener('click', checkedRadioBtn);
