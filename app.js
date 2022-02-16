function validateInputs() {
    const incomeField = document.getElementById('income-field');
    const incomeAmount = parseInt(incomeField.value);
    if (isNaN(incomeAmount) || incomeAmount < 0) {
        alert('Please enter valid inputs!!')
    }
    else {
        return incomeAmount;
    }
}



document.getElementById('calc-btn').addEventListener('click', function () {
    // const incomeField = document.getElementById('income-field');
    // const incomeAmount = parseInt(incomeField.value);
    // if (isNaN(incomeAmount) || incomeAmount < 0) {
    //     console.log('it is a string');
    // }
    // else {
    //     console.log(incomeAmount);
    // }
    const incomeAmount = validateInputs();
    console.log(incomeAmount);
})