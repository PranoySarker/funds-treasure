// Fuction to validate all the input field 
function validateInputs(input) {
    const inputField = document.getElementById(input + '-field');
    const inputAmount = parseInt(inputField.value);
    if (isNaN(inputAmount) || inputAmount < 0) {
        inputField.style.borderBlockColor = 'red';
        alert('Require valid inputs in ' + input + ' field');
    }
    else {
        inputField.style.borderBlockColor = 'black';
        return inputAmount;

    }
}

// event handler for calculate button 
document.getElementById('calc-btn').addEventListener('click', function () {

    const incomeAmount = validateInputs('income');

    const foodAmount = validateInputs('food');

    const rentAmount = validateInputs('rent')

    const clothesAmount = validateInputs('clothes')

    const totalExpense = foodAmount + rentAmount + clothesAmount;
    console.log(totalExpense);
    const totalExpenseText = document.getElementById('total-expense')
    if (totalExpense > incomeAmount) {
        totalExpenseText.textContent = "Expense should not larger than your Income"
        totalExpenseText.style.color = "red"
    }
    else {
        totalExpenseText.innerText = totalExpense;
        totalExpenseText.style.color = "black";
    }
    const balance = document.getElementById('balance');
    balance.innerText = incomeAmount - totalExpense;
})

// Event handler for save button 
document.getElementById('save-btn').addEventListener('click', function () {
    const incomeBalance = validateInputs('income');

    //get balance amount
    const balance = document.getElementById('balance');
    const balanceAmount = parseInt(balance.innerText);

    //calcultion for percentage
    const saveField = document.getElementById('save-field');
    const saveFieldValue = parseInt(saveField.value);
    const percentageLaw = saveFieldValue / 100;
    const savingsAmount = incomeBalance * percentageLaw;


    // validation for savings balance field 
    const savingsField = document.getElementById('saving-amount')
    if (savingsAmount > balanceAmount) {
        savingsField.textContent = "Your savings should not larger than your Income"
        savingsField.style.color = "red"
    }
    else {
        savingsField.textContent = savingsAmount;
        savingsField.style.color = "black";
    }

    //remaining balace
    document.getElementById('remaining-balance').innerText = balanceAmount - savingsAmount;

})

