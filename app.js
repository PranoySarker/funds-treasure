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


document.getElementById('calc-btn').addEventListener('click', function () {

    const incomeAmount = validateInputs('income');
    console.log(incomeAmount);

    const foodAmount = validateInputs('food');
    console.log(foodAmount);

    const rentAmount = validateInputs('rent')
    console.log(rentAmount);

    const clothesAmount = validateInputs('clothes')
    console.log(clothesAmount);

    const totalExpense = foodAmount + rentAmount + clothesAmount;
    console.log(totalExpense);
    const totalExpenseText = document.getElementById('total-expense')
    if (totalExpense > incomeAmount) {
        totalExpenseText.textContent = "Expense should not larger than your Income"
        totalExpenseText.style.color = "red"
    }
    else {
        totalExpenseText.innerText = totalExpense;
    }
    const balance = document.getElementById('balance');
    balance.innerText = incomeAmount - totalExpense;
})

