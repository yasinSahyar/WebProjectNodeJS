// Function to prompt the user for movie details and track ratings
function trackMovies() {
  // Prompt the user to enter the number of movies they want to rate
  const numOfMovies = parseInt(prompt("How many movies would you like to rate?"), 10);

  // Initialize an array to store movie objects
  const movies = [];

  // Loop to gather movie details
  for (let i = 0; i < numOfMovies; i++) {
      // Prompt the user to enter the movie title
      const title = prompt(`Enter the title of movie ${i + 1}:`);

      // Prompt the user to enter the rating (1 to 5)
      let rating = parseInt(prompt(`Enter your rating for "${title}" (1 to 5):`), 10);

      // Ensure the rating is within the valid range (1 to 5)
      while (rating < 1 || rating > 5 || isNaN(rating)) {
          rating = parseInt(prompt(`Invalid rating. Please enter a rating between 1 and 5 for "${title}":`), 10);
      }

      // Create a movie object and add it to the movies array
      const movie = { title, rating };
      movies.push(movie);
  }

  // Sort the movies array based on ratings in descending order
  movies.sort((a, b) => b.rating - a.rating);

  // Determine the highest-rated movie
  const highestRatedMovie = movies[0];

  // Display the sorted list of movies
  let movieListHTML = "<h2>Sorted List of Movies:</h2><ul>";
  movies.forEach(movie => {
      movieListHTML += `<li>${movie.title} - Rating: ${movie.rating}</li>`;
  });
  movieListHTML += "</ul>";

  // Display the highest-rated movie
  const highestRatedHTML = `<h2>Highest-Rated Movie:</h2><p>${highestRatedMovie.title} - Rating: ${highestRatedMovie.rating}</p>`;

  // Output the results to the HTML document
  document.getElementById("movie-list").innerHTML = movieListHTML;
  document.getElementById("highest-rated").innerHTML = highestRatedHTML;
}

// Call the function to run the program
trackMovies();
