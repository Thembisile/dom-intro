// get a reference to the textbox where the bill type is to be entered
// var billTypeText = document.querySelector(".billTypeText");
// //get a reference to the add button
// var textTotalAddBtn = document.querySelector(".addToBillBtn");
// //create a variable that will keep track of the total bill
// var totalCostElem = document.querySelector(".totalOne")
// var callsTotalElem = document.querySelector(".callTotalOne")
// var smsTotalElem = document.querySelector(".smsTotalOne")
// //add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function addTextTotal(){

    var callsTotal = 0;
    var smsTotal = 0;
    var totalCost = 0;

    function callBillTotal(billText){
        // update the correct total
        if (billText === "call"){
            callsTotal += 2.75
        }
      }

    function returnCalls(){
      return callsTotal;
    }

    function smsBillTotal(billText){
        if (billText === "sms"){
            smsTotal += 0.75;
      }
    }

    function returnSms(){
      return smsTotal;
    }

    function returnTotal(){
      var totalCost = callsTotal + smsTotal;
      return totalCost;
    }

      return {
        callBillTotal,
        returnCalls,
        smsBillTotal,
        returnSms,
        returnTotal
      }
}
//     //update the totals that is displayed on the screen.
//     callsTotalElem.innerHTML = callsTotal.toFixed(2);
//     smsTotalElem.innerHTML = smsTotal.toFixed(2);
//     var totalCost = callsTotal + smsTotal;
//     totalCostElem.innerHTML = totalCost.toFixed(2);
//
//     //color the total based on the criteria
//     if (totalCost >= 30){
//         // adding the danger class will make the text red
//         totalCostElem.classList.add("danger");
//     }
//     else if (totalCost >= 20){
//         totalCostElem.classList.add("warning");
//     }
//   }
//
// textTotalAddBtn.addEventListener('click', textBillTotal);
