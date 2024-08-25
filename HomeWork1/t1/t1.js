'use strict';

const celsius = prompt('Enter the temperature in Celsius:');

// Convert the temperature to Fahrenheit and Kelvin
const fahrenheit = (celsius * 9/5) + 32;
const kelvin = parseFloat(celsius) + 273.15;

// output message
const outputMessage = `
    The temperature in Celsius: ${celsius}°C <br>
    The temperature in Fahrenheit: ${fahrenheit.toFixed(2)}°F <br>
    The temperature in Kelvin: ${kelvin.toFixed(2)}K
`;

// Display the result in the HTML document
document.querySelector('#output').innerHTML = outputMessage;
