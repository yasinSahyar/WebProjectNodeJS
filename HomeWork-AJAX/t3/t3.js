'use strict';

// Function to handle GET request
async function getData() {
    try {
        const response = await fetch('https://reqres.in/api/unknown/23');
        if (!response.ok) {
            throw new Error(`GET request failed with status: ${response.status}`);
        }
        const data = await response.json();
        console.log('GET Response:', data);
    } catch (error) {
        console.error('Error during GET request:', error);
    }
}

// Function to handle POST request
async function postData() {
    const userData = { name: "Yasin Sahyar", job: "Designer" };
    try {
        const response = await fetch('https://reqres.in/api/unknown/23', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            throw new Error(`POST request failed with status: ${response.status}`);
        }
        const data = await response.json();
        console.log('POST Response:', data);
    } catch (error) {
        console.error('Error during POST request:', error);
    }
}

// Function to handle PUT request
async function putData() {
    const updateData = { name: "Yasin Sahyar", job: "Engineer" };
    try {
        const response = await fetch('https://reqres.in/api/unknown/23', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData)
        });
        if (!response.ok) {
            throw new Error(`PUT request failed with status: ${response.status}`);
        }
        const data = await response.json();
        console.log('PUT Response:', data);
    } catch (error) {
        console.error('Error during PUT request:', error);
    }
}

// Function to handle DELETE request
async function deleteData() {
    try {
        const response = await fetch('https://reqres.in/api/unknown/23', {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error(`DELETE request failed with status: ${response.status}`);
        }
        console.log('DELETE Response: Resource deleted successfully');
    } catch (error) {
        console.error('Error during DELETE request:', error);
    }
}

// Execute the functions
getData();
postData();
putData();
deleteData();
