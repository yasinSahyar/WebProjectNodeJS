'use strict';

// Prompt the user for the coordinates of the first point
const point1 = prompt('Enter the coordinates of the first point (x1, y1) separated by a comma:');
const [x1, y1] = point1.split(',').map(Number);

// Prompt the user for the coordinates of the second point
const point2 = prompt('Enter the coordinates of the second point (x2, y2) separated by a comma:');
const [x2, y2] = point2.split(',').map(Number);

// Calculate the Euclidean distance between the two points
const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

// Prepare the output message
const outputMessage = `
    The coordinates of the first point: (${x1}, ${y1}) <br>
    The coordinates of the second point: (${x2}, ${y2}) <br>
    The distance between the two points is: ${distance.toFixed(2)} units
`;

// Display the result in the HTML document
document.querySelector('#output').innerHTML = outputMessage;
