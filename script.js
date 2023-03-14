// Call the main functions the page is loaded
window.onload = () => {
  getOriginals()
  getTrendingNow()
  getTopRated()
}

// Helper function that makes dynamic API calls
function fetchMovies(url, dom_element, path_type) {
  // Use Fetch with the url passed down

  // Within Fetch get the response and call the showMovies() with the data, dom_element, and path type
}

// Function that displays the movies to the DOM
showMovies = (movies, dom_element, path_type) => {

  // Create a variable that grabs id or class

  // Loop through object

  // Within loop, create an img element

  // Set attribute

  // Set Source

  // Add event listener to handleMovieSelection() onClick

  // Append the imageElement to the dom_element selected
}
}

// Function that fetches Netflix Originals
function getOriginals() {
  
}

// Function that fetches Trending Movies
function getTrendingNow() {
  
}

// Function that fetches the top Rated movies
function getTopRated() {
  
}

// BONUS

// Fetches URL provided and returns response.json()
async function getMovieTrailer(id) {
  // URL:
   // `https://api.themoviedb.org/3/movie/${id}/videos?
  // api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
}

// Function that adds the movie data to the DOM
const setTrailer = trailers => {
  // Set up iframe variable to hold id of the movieTrailer Element
  const iframe
  // St up variable to select .movieNotFound element
  const movieNotFound

  // If there is a trailer add the src for it
  if(trailers.length > 0) {
    // add d-none class to movieNotFound and remove it from iframe

    // Add youtube link with trailers key to iframe.src
  }
  else {
    // Else remove d-none class to movieNotFound and ADD it to iframe
  }
    
}