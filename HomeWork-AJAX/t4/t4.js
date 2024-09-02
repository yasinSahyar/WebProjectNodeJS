'use strict';

// Reusable async function for fetching data
async function fetchData(url, options = {}) {
    try {
        const response = await fetch(url, options);

        // Check if the response status is not in the range of 2xx
        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status} - ${response.statusText}`);
        }

        // Parse and return the JSON response
        const data = await response.json();
        return data;
    } catch (error) {
        // Log the error message and rethrow it for further handling
        console.error('Fetch error:', error.message);
        throw error;
    }
}

// Example usage of fetchData function with a POST request
(async function testFetchData() {
    try {
        const user = {
            name: 'Yasin Sahyar',
            job: 'Developer'
        };

        const url = 'https://reqres.in/api/users';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        };

        // Call the fetchData function and handle the response
        const userData = await fetchData(url, options);
        console.log('User data:', userData);
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
