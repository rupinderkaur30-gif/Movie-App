class Movie{

static all = []

constructor(data){
    this.data = data
    this.constructor.all.push(this)
}

static getMovies = () => {
    api.getMovies().then(movies => {
      movies.forEach(movie => new Movie(movie))
      this.renderIndex()
    })
  }

  static renderIndex = () => {
    const main = document.getElementById("main")
    main.innerHTML = ""
    const movieContainer = document.createElement("div")
    movieContainer.id = "movie-container"
    const addMovie = document.createElement("button")
    addMovie.innerText = "List a New Movie"
    addMovie.addEventListener("click", this.openMovieForm)
    main.append(movieContainer, addMovie)
    this.all.forEach(movie => movie.renderCard())
    movieContainer.addEventListener("click", this.handleIndexClick)
  }

  static openMovieForm = () => {
    modal.main.innerHTML = `
    <h1>Add Your Movie</h1>
    <form>
      <label for="title">Title:</label><br>
      <input type="text" name="title"><br>
      <label for"image">Image:</label><br>
      <input type="text" name="image"><br>
      <label for="overview">Overview:</label><br>
      <input type="text" name="overview"><br>
      <label for="release_year">Release_date:</label><br>
      <input type="number" name="release_date"><br>
      <label for="rating">Rating:</label><br>
      <input type="number" name="rating"><br>
      <input type="submit" value="Add movie"><br>
    </form>
    `
    modal.main.querySelector("form").addEventListener("submit", this.handleSubmit)
    modal.open()
  }
 
  renderCard = () => {
    const { title, image, overview, release_date, rating, id} = this.data
    document.getElementById("house-container").innerHTML += `
    <div class="movie-card" data-id=${id}>
      <img src=${image} alt=${title}/>
      <p class="title">${title}</p>
      <p>${overview}}</p>
      <p>${release_date}</p>
      <p>${rating}</p>
    </div>`
  }
}