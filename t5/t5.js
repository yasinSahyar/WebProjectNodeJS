'use strict';

// Prompt the user to enter a positive integer
const num = parseInt(prompt('Enter a positive integer:'));

if (num > 0) {
    // Initialize the sum variable
    let sum = 0;

    // Use a for loop to calculate the sum of natural numbers up to and including the entered number
    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    // Prepare the output message
    const resultMessage = `
        The sum of all natural numbers up to and including ${num} is: ${sum}
    `;

    // Display the result in the HTML document
    document.querySelector('#result').innerHTML = resultMessage;
} else {
    // Display an error message if the input is not a positive integer
    document.querySelector('#result').innerHTML = 'Please enter a valid positive integer.';
}
