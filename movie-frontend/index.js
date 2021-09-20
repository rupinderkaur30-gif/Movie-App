
const api = new ApiService("http://localhost:3000")
const inputElement = document.querySelector("#search")
const modal = new Modal()
Movie.getMovies()
let user

inputElement.onkeyup = function(e) {
    const value = e.target.value;
    const movies =  Movie.all.filter(movie => movie.data.title.toLowerCase().includes(value.toLowerCase()))
    Movie.searchResult(movies)
    
}

document.querySelector("#log-in").addEventListener("click", openUsernameForm)

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
    api.findOrCreateUser(e.target.username.value).then(userData => {
      user = userData
      const loginContainer = document.getElementById("log-in")
      loginContainer.innerHTML = `
      <p>Hi, Welcome ${user.username}</p>
      `
     localStorage.setItem("userId", user.id)
    })
    modal.close()

}

