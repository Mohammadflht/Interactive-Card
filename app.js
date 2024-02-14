// Select the input element
let input = document.querySelector('.form-base #card-number');

// Select all the 'p' elements inside the 'card-number' div
let cardNumbers = document.querySelectorAll('.card-number p');

// Add an event listener to the input field
input.addEventListener('input', function() {
    // Get the value of the input field
    let inputValue = this.value.replace(/\s/g, ''); // Remove spaces

    // Add spaces after every 4 digits for readability
    this.value = inputValue.replace(/(\d{4})/g, '$1 ').trim();

    // Loop through all the 'p' elements
    for (let i = 0; i < cardNumbers.length; i++) {
        if (i < inputValue.length) {
            // If there is a number for this 'p' element, update its text
            cardNumbers[i].textContent = inputValue[i];
        } else {
            // Otherwise, set the text to '0'
            cardNumbers[i].textContent = '0';
        }
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
    } else {
        // If the input is empty, set the default name
        cardName.textContent = 'JANE APPLESEED';
    }
});

// Select the input elements for the expiration month and year
let inputMonth = document.querySelector('.namedate-part-left div:nth-child(1) input');
let inputYear = document.querySelector('.namedate-part-left div:nth-child(2) input');

// Select the 'p' element inside the 'card-exp-date' div
let cardExpDate = document.querySelector('.card-exp-date p');

// Add an event listener to the input field for the expiration month
inputMonth.addEventListener('input', function() {
    // Get the value of the input field
    let inputMonthValue = this.value;

    // Get the current value of the card's expiration date
    let currentExpDate = cardExpDate.textContent.split('/');

    // Update the month in the card's expiration date
    currentExpDate[0] = inputMonthValue ? inputMonthValue.padStart(2, '0') : '00';

    // Update the card's expiration date
    cardExpDate.textContent = currentExpDate.join('/');
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


