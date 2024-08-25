

// Function to sort an array of numbers in ascending or descending order
function sortArray(numbers, order) {
  // Check the order parameter and sort accordingly
  if (order === "asc") {
      // Sort the array in ascending order
      return numbers.slice().sort((a, b) => a - b);
  } else if (order === "desc") {
      // Sort the array in descending order
      return numbers.slice().sort((a, b) => b - a);
  } else {
      // If the order parameter is not recognized, return the original array
      console.error("Invalid order parameter. Use 'asc' for ascending or 'desc' for descending.");
      return numbers;
  }
}

// Hardcoded array of numbers for testing
const numbers = [5, 2, 8, 1, 9];

// Test the function with ascending order
console.log("Original Array:", numbers);
console.log("Sorted Array (Ascending):", sortArray(numbers, "asc"));

// Test the function with descending order
console.log("Sorted Array (Descending):", sortArray(numbers, "desc"));
