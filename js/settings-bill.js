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
updateBtn.addEventListener('click', function())
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
