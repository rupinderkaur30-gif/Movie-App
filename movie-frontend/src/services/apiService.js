class ApiService {
  
  constructor(api){
      this.api = api
  }

  getMovies = () => fetch(this.api + "/movies").then(res => res.json())

  createMovie = (newMovie) => {
      return fetch(this.api + "/movies", { method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    })
    .then(response => response.json())
  }

  destroyMovie = (id) => {
   Movie.all = Movie.all.filter(movie => movie.data.id !== id)
 
    return fetch(this.api + "/movies/" + id, {
      headers: {
        'Content-Type': 'application/json',
      },
        method: 'DELETE' 
    })
  }

  updateMovie(movie)  {
    return fetch(`${this.api}/movies/${movie.id}`, {
      method: 'PATCH', // or 'PUT'
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(movie)
    })
      .then(response => response.json())
    

}

findOrCreateUser = (username) => {
  return fetch(this.api + "/users", {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username: username}),
  })
  .then(response => response.json())
}

createReview = (review) => {
  return fetch(this.api + "/reviews", {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  })
  .then(response => response.json())

}

getFavorites = () => {
  return fetch(this.api + `/favorites?user_id=${user.id}`)
  .then(response => response.json())
}

toggleFavorite = (e) => {
  return fetch(this.api + "/favorites", {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user_id: user.id, 
    movie_id: e.target.dataset.id
  }),
})
.then(res => res.json())
}
}