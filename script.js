var billInput = document.querySelector("#billamount");

var cashGiven = document.querySelector("#cashgiven");
var buttonCheck = document.querySelector("#check-btn");
var message = document.querySelector("#error-message");

buttonCheck.addEventListener("click", function valueValidation(){
    message.style.display = "none";

    if(Number(billInput.value) > 0){
        if(Number(cashGiven.value)>Number(billInput.value)){

        }
        else{
            showMessage("Cash given should be more than the bill");
        };
    }
    else{
        showMessage("Invalid input");
    }
});
function showMessage(messageShown){
    message.style.display = "block";
    message.innerText = messageShown;
}
