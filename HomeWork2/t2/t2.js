// Create an empty array called numbers
let numbers = [];

// Prompt the user to enter five numbers and add each to the numbers array using push()
for (let i = 1; i <= 5; i++) {
    let num = parseInt(prompt(`Enter Number ${i}:`), 10);
    numbers.push(num);
}

// Display the contents of the numbers array in the console
console.log("Numbers:", numbers);

// Prompt the user to enter a number to search for in the array
let searchNum = parseInt(prompt("Enter a Number to Search:"), 10);

// Check if the entered number is included in the numbers array using includes()
if (numbers.includes(searchNum)) {
    console.log(`Number ${searchNum} is found in the array.`);
} else {
    console.log(`Number ${searchNum} is not found in the array.`);
}

// Remove the last number from the numbers array using pop()
numbers.pop();

// Display the updated numbers array in the console
console.log("Updated Numbers:", numbers);

// Sort the numbers array in ascending numerical order using sort() with a custom comparison function
numbers.sort((a, b) => a - b);

// Display the sorted numbers array in the console
console.log("Sorted Numbers:", numbers);
