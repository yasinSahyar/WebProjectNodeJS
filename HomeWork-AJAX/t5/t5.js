// t5.js

// Function to fetch restaurants from the API
async function fetchRestaurants() {
  try {
      const response = await fetch('https://reqres.in/api/users'); // Example API endpoint
      if (!response.ok) throw new Error('Failed to load restaurant data');

      const data = await response.json();
      const restaurants = data.data; // Adjust based on API response structure
      displayRestaurants(restaurants);
  } catch (error) {
      console.error('Error:', error.message);
      document.getElementById('restaurant-list').innerText = 'Failed to load restaurants.';
  }
}

// Function to display the restaurants in the HTML
function displayRestaurants(restaurants) {
  const listContainer = document.getElementById('restaurant-list');
  listContainer.innerHTML = ''; // Clear existing content

  restaurants.forEach(restaurant => {
      const restaurantElement = document.createElement('div');
      restaurantElement.className = 'restaurant';
      restaurantElement.innerHTML = `
          <h2>${restaurant.first_name} ${restaurant.last_name}</h2>
          <p>Email: ${restaurant.email}</p>
          <button onclick="fetchMenu(${restaurant.id})">View Menu</button>
      `;
      listContainer.appendChild(restaurantElement);
  });
}

// Function to fetch menu for a specific restaurant
async function fetchMenu(restaurantId) {
  try {
      const response = await fetch(`https://reqres.in/api/users/${restaurantId}`);
      if (!response.ok) throw new Error('Failed to load menu');

      const menu = await response.json();
      showMenuInModal(menu.data);
  } catch (error) {
      console.error('Error:', error.message);
      alert('Failed to load menu.');
  }
}

// Function to show the menu in a modal
function showMenuInModal(menu) {
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = `
      <h2>${menu.first_name} ${menu.last_name}</h2>
      <p>Email: ${menu.email}</p>
      <h3>Menu</h3>
      <ul>
          <li>Dish 1 - $10</li>
          <li>Dish 2 - $12</li>
          <li>Dish 3 - $15</li>
      </ul>
  `;

  const modal = document.getElementById('restaurant-modal');
  modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
  document.getElementById('restaurant-modal').style.display = 'none';
}

// Initialize the app by fetching the restaurants when the page loads
document.addEventListener('DOMContentLoaded', fetchRestaurants);
