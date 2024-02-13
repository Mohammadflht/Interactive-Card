// Select the input element
let input = document.querySelector('.form-base #card-number');

// Select all the 'p' elements inside the 'card-number' div
let cardNumbers = document.querySelectorAll('.card-number p');

// Add an event listener to the input field
input.addEventListener('input', function() {
    // Get the value of the input field
    let inputValue = this.value.replace(/\s/g, ''); // Remove spaces

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


