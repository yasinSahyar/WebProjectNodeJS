'use strict';

async function fetchData() {
    try {
        const response = await fetch('https://reqres.in/api/users/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error: ', error);
    }
}

fetchData();
