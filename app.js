let inputs = document.querySelectorAll('input');
window.onload = function() {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
};

// Select the input element
let inputNumber = document.querySelector('.form-base #card-number');

// Select the next input element
let nextInput = document.querySelector('.namedate-part-left div:nth-child(1) input'); // Replace this with the correct selector for your next input field

// Select all the 'p' elements inside the 'card-number' div
let cardNumbers = document.querySelectorAll('.card-number p');

// Add an event listener to the input field
inputNumber.addEventListener('input', function() {
    // Get the value of the input field
    let inputValue = this.value.replace(/\s/g, ''); // Remove spaces

    // Add spaces after every 4 characters for readability
    this.value = inputValue.replace(/(.{4})/g, '$1 ').trim();

    // Loop through all the 'p' elements
    for (let i = 0; i < cardNumbers.length; i++) {
        if (i < inputValue.length) {
            // If there is a character for this 'p' element, update its text
            cardNumbers[i].textContent = inputValue[i];
        } else {
            // Otherwise, set the text to '0'
            cardNumbers[i].textContent = '0';
        }
    }

    // If all characters have been typed, move focus to the next input field
    if (inputValue.length === 16) {
        nextInput.focus();
    }
});




// Select the input element for the cardholder's name
let inputName = document.querySelector('.form-base #cardholder');

// Select the 'p' element inside the 'card-name' div
let cardName = document.querySelector('.card-name p');

// Add an event listener to the input field for the cardholder's name
inputName.addEventListener('input', function() {
    // Get the value of the input field
    let inputValue = this.value.toUpperCase(); // Convert to uppercase
    
    // Update the cardName text
    if (inputValue) {
        cardName.textContent = inputValue;
        cardName.style.animation = "slide-up 0.3s ease-out both"
    } else {
        // If the input is empty, set the default name
        cardName.textContent = 'JANE APPLESEED';
        cardName.style.animation = "none";
    }
});

let inputMonth = document.querySelector('.namedate-part-left div:nth-child(1) input');
let inputYear = document.querySelector('.namedate-part-left div:nth-child(2) input');
let cardExpDate = document.querySelector('.card-exp-date p');

// Add an event listener to the input field for the expiration month
inputMonth.addEventListener('input', function() {
    // Get the value of the input field
    let inputMonthValue = this.value;
    
    // Check if the entered value is greater than 12
    if (inputMonthValue > 12) {
        // If it is, set the value to 12
        this.value = '12';
        inputMonthValue = '12';
    }
    
    // Get the current value of the card's expiration date
    let currentExpDate = cardExpDate.textContent.split('/');
    
    // Update the month in the card's expiration date
    currentExpDate[0] = inputMonthValue ? inputMonthValue.padStart(2, '0') : '00';
    
    // Update the card's expiration date
    cardExpDate.textContent = currentExpDate.join('/');
    
    // If inputMounth have been typed, move focus to the inputYear field
    if (inputMonthValue.length === 2) {
        inputYear.focus();
    }
});

// Add an event listener to the input field for the expiration year
inputYear.addEventListener('input', function() {
    // Get the value of the input field
    let inputYearValue = this.value;
    
    // Get the current value of the card's expiration date
    let currentExpDate = cardExpDate.textContent.split('/');

    // Update the year in the card's expiration date
    currentExpDate[1] = inputYearValue ? inputYearValue.padStart(2, '0') : '00';

    // Update the card's expiration date
    cardExpDate.textContent = currentExpDate.join('/');

    if (inputYearValue.length === 2) {
        document.querySelector('.namedate-part-right input').focus();
    }
});

// Select the input element for the CVC
let inputCVC = document.querySelector('.namedate-part-right input');

// Select the 'p' element inside the 'card-cvc' div
let cardCVC = document.querySelector('.card-cvc p');

// Add an event listener to the input field for the CVC
inputCVC.addEventListener('input', function() {
    // Get the value of the input field
    let inputCVCValue = this.value;

    // Update the cardCVC text
    if (inputCVCValue) {
        cardCVC.textContent = inputCVCValue.padStart(3, '0');
    } else {
        // If the input is empty, set the default CVC
        cardCVC.textContent = '000';
    }
});


let mounthYearError = document.getElementById('mounthYearError');
let cardNumberError = document.getElementById('cardNumberError');
let cardCvcError = document.getElementById('cardCvcError');
let confirmButton = document.getElementById('confirmButton');
let continueButton = document.getElementById('continueButton');
let completeState = document.querySelector('.complete-state');
let formMain = document.querySelector('.form-main');

confirmButton.addEventListener('click', function() {
    let isError = false;
    if (!/^[0-9\s]*$/.test(inputNumber.value) || inputNumber.value.length < 19) {
        cardNumberError.style.display = "block";
        cardNumberError.textContent = "Wrong format, number only";
        isError = true;
    }else {
        cardNumberError.style.display = "none";
    }
    if (inputNumber.value.length === 0) {
        cardNumberError.style.display = "block";
        cardNumberError.textContent = "Can't be blank";
        isError = true;
    }
    if ((inputMonth.value.length === 0) || (inputYear.value.length === 0)) {
        mounthYearError.style.display = "block";
        mounthYearError.textContent = "Can't be blank";
        isError = true;
    }else {
        mounthYearError.style.display = "none";
    }
    if (inputCVC.value.length === 0) {
        cardCvcError.style.display = "block";
        cardCvcError.textContent = "Can't be blank";
        isError = true;
    }else {
        cardCvcError.style.display = "none";
    }

    // if there is no error at all ==> the complete state will appear
    if (!isError) {
        completeState.style.display = "block";
        formMain.style.display = "none";
    }
    
    console.log(isError);
    console.log(cardNumberError.textContent);
});

continueButton.addEventListener('click', function() {
    completeState.style.display = "none";
    formMain.style.display = "block";

    // Select all input elements
    let inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }

    // Reset the card details
    let cardNumbers = document.querySelectorAll('.card-number p');
    for (let i = 0; i < cardNumbers.length; i++) {
        cardNumbers[i].textContent = '0';
    }

    let cardName = document.querySelector('.card-name p');
    cardName.textContent = 'JANE APPLESEED';

    let cardExpDate = document.querySelector('.card-exp-date p');
    cardExpDate.textContent = '00/00';
    
    let cardCVC = document.querySelector('.card-cvc p');
    cardCVC.textContent = '000';
});





