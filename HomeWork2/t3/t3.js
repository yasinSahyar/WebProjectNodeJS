// Define an empty array to store the numbers entered by the user
let numbers = [];
let input;

// Use a loop to prompt the user for numbers and add them to the array until the user decides to stop
do {
    input = prompt("Enter a number (or 'done' to finish):");
    if (input !== 'done') {
        let num = parseInt(input, 10);
        // Only add valid numbers to the array
        if (!isNaN(num)) {
            numbers.push(num);
        } else {
            alert("Please enter a valid number.");
        }
    }
} while (input !== 'done');

// Initialize an empty string to store even numbers
let evenNumbers = "";

// Use the for...of loop to iterate over the entered values stored in the array
for (let num of numbers) {
    // Check if the current number is even using the modulo operator %
    if (num % 2 === 0) {
        // If even, add to the evenNumbers string
        evenNumbers += num + ", ";
    }
}

// Display the even numbers or 'None' if there are no even numbers
if (evenNumbers) {
    // Remove the last comma and space from the evenNumbers string
    evenNumbers = evenNumbers.slice(0, -2);
    document.write("Even Numbers: " + evenNumbers);
} else {
    document.write("Even Numbers: None");
}

// Display a message indicating the end of the program
document.write("<br>End of program.");
