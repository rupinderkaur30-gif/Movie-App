class Movie {

static all = []

constructor(data){
    this.data = data
    this.constructor.all.push(this)
    console.log(this)
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
  static find = (id) => this.all.find(movie => movie.data.id == id)

  static handleIndexClick = (e) =>{
   if (e.target.tagName == 'IMG' || e.target.classList.contains("title")){
     const id = e.target.closest(".movie-card").dataset.id
     this.find(id).renderShow()
    }
   }


   renderShow = () => {
     const {title, image , overview , release_date , rating , id} = this.data
     document.getElementById("main").innerHTML = `
     <div class ="show" >
     <h1>${title}<h1>
     <img src ="${image}" alt=${title}/>
     <p>${overview}</p>
     <p>${release_date}</p>
     <p>${rating}</p>
     </div>
     <button id="goBack">Go Back</button><br>
     
     <button id="deleteButton">Delete Button</button>
     <button id="editButton">Edit Button</button>

     `
     document.getElementById("goBack").addEventListener("click", Movie.renderIndex)
     document.getElementById("deleteButton").addEventListener("click", () => {
      api.destroyMovie(id)
      Movie.all = Movie.all.filter(movie => movie.data.id !== id)
      Movie.renderIndex()
     })
     document.getElementById("editButton").addEventListener("click", () => {
       Movie.openMovieForm()
     })

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
    document.getElementById("movie-container").innerHTML += `
    <div class="movie-card" data-id=${id}>
      <img src=${image} alt=${title}/>
      <p class="title">${title}</p>
    </div>`
  }

  static handleSubmit = (e) => {
    e.preventDefault()
    const newMovie = {
      title: e.target.title.value,
      image: e.target.image.value,
      overview: e.target.overview.value,
      release_date: e.target.release_date.value,
      rating: e.target.rating.value,
      
    }
    api.createMovie(newMovie).then(movie => {
      new Movie(movie).renderCard()
    })
    modal.close()
    e.target.reset()
  }
}