var calculateBtn = document.querySelector(".calculateButton")
var billTotalElement = document.querySelector(".billTotal")
var bill = document.querySelector(".billString")

calculateBtn.addEventListener('click', function(){
  var billValue = bill.value;
  var roundedBillTotal = CalculateBtnClicked(billValue);
  billTotalElement.innerHTML = roundedBillTotal;

  if (roundedBillTotal >= 30){
      billTotalElement.classList.add("danger");
    }

  else if (roundedBillTotal >= 20){
      billTotalElement.classList.add("warning");
    }

    if (roundedBillTotal < 20) {
      billTotalElement.classList.remove("warning")
    }
    else if (roundedBillTotal < 30) {
      billTotalElement.classList.remove("danger")
    }
});
