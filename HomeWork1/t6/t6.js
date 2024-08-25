'use strict';

// Prompt the user to enter a positive integer
const num = parseInt(prompt('Enter a positive integer:'));

if (num > 0) {
    // Initialize an empty string to build the table HTML
    let tableHTML = '<table>';

    // Outer loop for rows
    for (let i = 1; i <= num; i++) {
        tableHTML += '<tr>'; // Start a new row

        // Inner loop for columns
        for (let j = 1; j <= num; j++) {
            tableHTML += `<td>${i * j}</td>`; // Calculate and add the product to the table
        }

        tableHTML += '</tr>'; // End the current row
    }

    tableHTML += '</table>'; // Close the table

    // Display the generated multiplication table in the HTML document
    document.querySelector('#result').innerHTML = tableHTML;
} else {
    // Display an error message if the input is not a positive integer
    document.querySelector('#result').innerHTML = 'Please enter a valid positive integer.';
}
