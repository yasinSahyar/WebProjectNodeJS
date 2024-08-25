// Function to sort an array of numbers in ascending order
function sortArray(numbers) {
  // Sort the array in ascending order
  const sortedArray = numbers.slice().sort((a, b) => a - b);
  return sortedArray;
}

// Hardcoded array of numbers
const numbers = [5, 2, 8, 1, 9];

// Print the original array
console.log("Original Array:", numbers);

// Call the sortArray function and store the result
const sortedNumbers = sortArray(numbers);

// Print the sorted array
console.log("Sorted Array (Ascending):", sortedNumbers);





/*
// Function to sort an array of numbers in ascending or descending order
function sortArray(numbers, order) {
  if (order === "asc") {
      // Sort in ascending order
      return numbers.slice().sort((a, b) => a - b);
  } else if (order === "desc") {
      // Sort in descending order
      return numbers.slice().sort((a, b) => b - a);
  } else {
      // If the order parameter is invalid, return the original array
      console.error("Invalid order parameter. Use 'asc' for ascending or 'desc' for descending.");
      return numbers;
  }
}

// Hard-coded array of numbers for testing
const numbers = [5, 2, 8, 1, 9];

// Testing the function with ascending order
console.log("Original Array:", numbers);
console.log("Sorted Array (Ascending):", sortArray(numbers, "asc"));

// Testing the function with descending order
console.log("Sorted Array (Descending):", sortArray(numbers, "desc"));

*/


