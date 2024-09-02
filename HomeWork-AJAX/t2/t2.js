'use strict';

async function createUser() {
    const userData = {
        name: "Yasin Sahyar",
        job: "Developer"
    };

    try {
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('User Created:', data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

createUser();
