// 1. Create an array called 'fruits' and initialize it
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// 2. Display the contents of the fruits array in the console
console.log("Fruits:", fruits);

// 3. Calculate and display the length of the fruits array
console.log("Length of Fruits:", fruits.length);

// 4. Access and display the element at index 2 in the fruits array
console.log("Element at Index 2:", fruits[2]);

// 5. Access and display the last element in the fruits array using the length property
console.log("Last Element of Fruits:", fruits[fruits.length - 1]);

// 6. Create an empty array called 'vegetables'
const vegetables = [];

// 7. Prompt the user to enter three vegetables and add each to the vegetables array
for (let i = 0; i < 3; i++) {
    let vegetable = prompt("Enter a vegetable:");
    vegetables.push(vegetable);
}

// 8. Display the contents of the vegetables array in the console
console.log("Vegetables:", vegetables);

// 9. Calculate and display the length of the vegetables array
console.log("Length of Vegetables:", vegetables.length);
