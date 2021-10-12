class Movie {

static all = []

constructor(data){
    this.data = data
    this.reviews = this.data.reviews.map(review => new Review(review, this))
    this.constructor.all.push(this)

}

static getMovies = () => {
    api.getMovies().then(movies => {
      Movie.all = []
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

  static searchResult = (movies) => {
    const main = document.getElementById("main")
    main.innerHTML = ""
    const movieContainer = document.createElement("div")
    movieContainer.id = "movie-container"
    const addMovie = document.createElement("button")
    addMovie.innerText = "List a New Movie"
    addMovie.addEventListener("click", this.openMovieForm)
    main.append(movieContainer, addMovie)
    movies.forEach(movie => movie.renderCard())
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
     const {title, image , overview , release_date , rating , reviews, id} = this.data
     let stars = ""
     for (let i = 0; i < Math.round(parseInt(rating)); i++) {
       stars += '⭐'
     }

     document.getElementById("main").innerHTML = `
     <div class ="show" >
     <h1>${title}<h1>
     <img src ="${image}" alt=${title}/>
     <p>${overview}</p>
     <p>${release_date}</p>
     <p>${stars}</p>
     <div class="reviewsContainer">
     </div>
     </div>
     <button id="goBack">Go Back</button><br>
     <button id="createReviewButton" data-movie-id="${id}">Create Review</button>
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
       Movie.openMovieEditForm(this)
     })

     document.getElementById("createReviewButton").addEventListener("click", Review.openReviewForm)
     reviews.forEach(review => new Review(review).render())
 }

 static openMovieEditForm = (movie) => {
  modal.main.innerHTML = `
  <h1>Edit Your Movie</h1>
  <form>
    <input type="hidden" name="id" value="${movie.data.id}">
    <label for="title">Title:</label><br>
    <input type="text" name="title" value="${movie.data.title}"> <br>
    <label for"image">Image:</label><br>
    <input type="text" name="image" value="${movie.data.image}"><br>
    <label for="overview">Overview:</label><br>
    <input type="text" name="overview" value="${movie.data.overview}"><br>
    <label for="release_date">Release_date:</label><br>
    <input type="date" name="release_date" value="${movie.data.release_date}"><br>
    <label for="rating">Rating:</label><br>
    <input type="number" name="rating" value="${movie.data.rating}"><br>
    <input type="submit" value="Update movie"><br>
  </form>
  `
   modal.main.querySelector("form").addEventListener("submit", this.updateMovie)
  modal.open()
}

  static updateMovie = (e) => {
    e.preventDefault()
    const updatedMovie = {
      id: e.target.id.value,
      title: e.target.title.value,
      image: e.target.image.value,
      overview: e.target.overview.value,
      release_date: e.target.release_date.value,
      rating: e.target.rating.value,
      
    }
    api.updateMovie(updatedMovie).then(movie => {
      Movie.all[Movie.all.findIndex(m => m.data.id === movie.id )].data =  movie
      const movieObj = Movie.find(movie.id)
      movieObj.renderShow()
    })
    modal.close()
    e.target.reset()
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
      <label for="release_date">Release_date:</label><br>
      <input type="date" name="release_date"><br>
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
        <span class="title">${title}</span>
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