
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input value
    inputField.value = '';
    return amountValue;

}

function updateTotalField(totalFieldId, dipositAmount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + dipositAmount;
}
function getCurrentBalance() {
    const balnceTotal = document.getElementById('balance-total');
    const balanceTotalText = balnceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
function updateBlance(amount, isAdd) {
    const balnceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balnceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balnceTotal.innerText = previousBalanceTotal - amount;
    }
}




document.getElementById('deposit-button').addEventListener('click', function () {

    const dipositAmount = getInputValue('deposit-input');
    if (dipositAmount > 0) {
        updateTotalField('deposit-total', dipositAmount);
        updateBlance(dipositAmount, true);
    }

})

//handle whitdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {

    //get and update whithdraw total   
    //update balance after withdraw

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBlance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('You can not withdraw more than what you in your account');
    }

})