const API_KEY = '09e6a620ac7883cad951562880764439';
const api = new ApiService("http://localhost:3000")
const url = "https://api.themoviedb.org/3/search/movie?api_key=09e6a620ac7883cad951562880764439&query=furious"
const buttonElement = document.querySelector("#search")
const inputElement = document.querySelector("#inputValue")
const modal = new Modal()
Movie.getMovies()

buttonElement.onclick = function(e) {
    e.preventDefault();
    const value = inputElement.value;

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log('Data: ', data);

    })
    .catch((error) => {
        console.log('Error: ', error);
    });
    console.log('Value: ', value);
}