let billInput = document.getElementById("billAmount");
let percentageInput = document.getElementById("percentageTip");
let tipamount = document.getElementById("tipAmount");
let totalamount = document.getElementById("totalAmount");
let errormessage = document.getElementById("errorMessage");
function calculateAmount() {
    if (billInput.value === "") {
        errormessage.textContent = 'enter valid input in bill amount';
    }
    else if (percentageInput.value === "") {
        errormessage.textContent = 'enter valid input in tip percentage';
    }
    else {
        errormessage.textContent = "";
        let a = (parseInt(billInput.value) * parseInt(percentageInput.value)) / 100;
        tipamount.value = a;
        totalamount.value = (parseInt(billInput.value) + a);
    }

}