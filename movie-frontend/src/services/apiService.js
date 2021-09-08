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
      return fetch(this.api + "/movies/"+id, {
          method: 'delete' 

      })
    }
}