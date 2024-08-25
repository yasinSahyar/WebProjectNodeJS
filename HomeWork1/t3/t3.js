'use strict';

// Prompt the user for the lengths of the three sides of the triangle
const side1 = parseFloat(prompt('Enter the length of the first side:'));
const side2 = parseFloat(prompt('Enter the length of the second side:'));
const side3 = parseFloat(prompt('Enter the length of the third side:'));

// Determine the type of triangle
let triangleType = '';

if (side1 === side2 && side2 === side3) {
    // All sides are equal
    triangleType = 'Equilateral';
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
    // Two sides are equal
    triangleType = 'Isosceles';
} else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
    // No sides are equal
    triangleType = 'Scalene';
} else {
    triangleType = 'Invalid inputs for a triangle';
}

// Prepare the output message
const outputMessage = `
    You entered sides: ${side1}, ${side2}, ${side3} <br>
    The triangle is: ${triangleType}
`;

// Display the result in the HTML document
document.querySelector('#output').innerHTML = outputMessage;
