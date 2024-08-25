'use strict';

// Prompt the user for their course assessment score
const score = parseFloat(prompt('Enter your course assessment score (0-100):'));

// Determine the grade based on the score
let grade = '';

if (score >= 0 && score <= 39) {
    grade = 0;
} else if (score >= 40 && score <= 51) {
    grade = 1;
} else if (score >= 52 && score <= 63) {
    grade = 2;
} else if (score >= 64 && score <= 75) {
    grade = 3;
} else if (score >= 76 && score <= 87) {
    grade = 4;
} else if (score >= 88 && score <= 100) {
    grade = 5;
} else {
    grade = 'Invalid score. Please enter a score between 0 and 100.';
}

// Prepare the output message
const resultMessage = `
    You entered a score of: ${score} <br>
    Your grade is: ${grade}
`;

// Display the result in the HTML document
document.querySelector('#result').innerHTML = resultMessage;
