const API_KEY = '09e6a620ac7883cad951562880764439';
const api = new ApiService("http://localhost:3000")
const inputElement = document.querySelector("#search")
const modal = new Modal()
Movie.getMovies()

inputElement.onkeyup = function(e) {
    const value = e.target.value;
    const movies =  Movie.all.filter(movie => movie.data.title.toLowerCase().includes(value.toLowerCase()))
    Movie.searchResult(movies)
    
}

document.querySelector("#btn").addEventListener("click", openUsernameForm)

function openUsernameForm() {
     modal.main.innerHTML  = `
     <form>
     <label for="username">Username:</label><br>
     <input type="text" id="username" name="username">
     <input type="submit" value="Submit">
   </form>
     `
     modal.main.querySelector("form").addEventListener("submit", handleUsernameSubmit)
  modal.open()
}

function handleUsernameSubmit(e){
    e.preventDefault()
    document.getElementById("main").innerHTML = ""
    api.findOrCreateUser(e.target.username.value).then(userData => {
      user = userData
})
}
