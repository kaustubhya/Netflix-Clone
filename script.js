// Call the main functions the page is loaded
window.onload = () => {
  getOriginals()
  getTrendingNow()
  getTopRated()
}

// Helper function that makes dynamic API calls
function fetchMovies(url, dom_element, path_type) {
  // Use Fetch with the url passed down
fetch(url)
  .then(response => {
    if(response.ok) {
      return response.json()
                    } else {
      throw new Error('Something went wrong')
                    }
  })
  .then(data => {
    showMovies(data, dom_element, path_type)
  })
  .catch(error_data => {
    console.log(error_data)
  })
    
   
  // Within Fetch get the response and call the showMovies() with the data, dom_element, and path type
}

// Function that displays the movies to the DOM
showMovies = (movies, dom_element, path_type) => {

  // Create a variable that grabs id or class
let moviesEl = document.querySelector(dom_element)
  // Grabs first element of a class
   
  // Loop through object
  for(let movie of movies.results){
  // Creating an element via a DOM
 // Within loop, create an img element
    let imageElement = document.createElement('img')
    // Set attribute
    imageElement.setAttribute('data-id', movie.id)

    // Set Source
    imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`
    // Special commas or backticks

     // Add event listener to handleMovieSelection() onClick
    imageElement.addEventListener('click', e => {
      handleMovieSelection(e)
    })

  // Append the imageElement to the dom_element selected
    // Using the append method now
    // child gives us the stuff inside the div
    moviesEl.appendChild(imageElement)
  }

}


// Function that fetches Netflix Originals
function getOriginals() {
  let url = 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'

  fetchMovies(url, '.original__movies', 'poster_path')
  }

// Function that fetches Trending Movies
function getTrendingNow() {
  let url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'

  fetchMovies(url, '#trending', 'backdrop_path')
}

// Function that fetches the top Rated movies
function getTopRated() {
  let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'

  fetchMovies(url, '#top_rated', 'backdrop_path')
  
}

// BONUS

// Fetches URL provided and returns response.json()
async function getMovieTrailer(id) {
  let url = 
`https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
  return await fetch(url).then(responce => {
    if(response.ok) {
      return response.json()
    } else {
      throw new Error('something went wrong')
    }
  })
}

// Function that adds the movie data to the DOM
const setTrailer = trailers => {
  // Set up iframe variable to hold id of the movieTrailer Element
  const iframe = document.getElementById('movieTrailer')
  // St up variable to select .movieNotFound element
  const movieNotFound = document.querySelector('.movieNotFound')

  // If there is a trailer add the src for it
  if(trailers.length > 0) { 
   
    // add d-none class to movieNotFound and remove it from iframe
     movieNotFound.classList.add('d-none')
    iframe.classList.remove('d-none')

    // Add youtube link with trailers key to iframe.src
    iframe.src = `https://www.youtube.com/embed/${trailers[0].key}`
  }
  else {
    // Else remove d-none class to movieNotFound and ADD it to iframe
    iframe.classList.add('d-none')
    movieNotFound.classList.remove('d-none')
  }    
}

const handleMovieSelection = e => {
  const id = e.target.getAttribute('data-id')
  const iframe = document.getElementById('movieTrailer')
  // here we need to get the id of the movie
  getMovieTrailer(id).then(data => {
    const results = data.results
    const youtubeTrailers = results.filter(result => {
      if(result.site == 'YouTube' && result.type == 'Trailer') {
        return true
      } else {
        return false
      }
    })
    setTrailer(youtubeTrailers)
  })

  // open modal
  $('#trailerModal').modal('show')
  // we need to call the api with the ID
}