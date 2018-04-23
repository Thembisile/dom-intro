//get a reference to the calculate button
//var calculateBtn = document.querySelector(".calculateBtns")
//get a reference to the billTotal element
//var billTotalElement = document.querySelector(".billTotal")
//get a reference to the billString
//var billStringField = document.querySelector(".billString")
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
//link the function to a click event on the calculate button
function calculateBtnClicked(billValue){

    var billValues = billValue.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
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
//     if (billTotal >= 30){
//         // adding the danger class will make the text red
//         billTotalElement.classList.add("danger");
//       }
//
//     else if (billTotal >= 20){
//         billTotalElement.classList.add("warning");
//       }
//
//       if (billTotal < 20) {
//         billTotalElement.classList.remove("warning")
//       }
//       else if (billTotal < 30) {
//         billTotalElement.classList.remove("danger")
//       }
//
//
//
//
//     //round to two decimals
//     var roundedBillTotal = billTotal.toFixed(2);
//     billTotalElement.innerHTML = roundedBillTotal;
//
//
//
//
// calculateBtn.addEventListener('click', calculateBtnClicked);