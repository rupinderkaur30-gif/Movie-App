class Review {
    static allReviews = [];

    constructor(data){
        this.data = data
        this.constructor.allReviews.push(this)
    }


    static openReviewForm = (e) => {
     modal.main.innerHTML = `
      <h1>Add Review</h1>
      <form>
            <input type="hidden" name="user_id" value="${user.id}">
            <input type="hidden" name="movie_id" value="${e.target.dataset.movieId}">
            <label for="content">Content:</label><br>
            <textarea name="content"></textarea><br>
            <input type="submit" value="Create Review"><br>
      </form>
     `
     modal.main.querySelector("form").addEventListener("submit", this.handleReviewsubmit)
     modal.open()
    }

    static handleReviewsubmit = (e) => {
        e.preventDefault()
        const newReview = {
            user_id: e.target.user_id.value,
            movie_id: e.target.movie_id.value,
            content: e.target.content.value

        }
        api.createReview(newReview).then(review => new Review(review).render())
        modal.close()
        e.target.reset()

    }

    render = () => {
        const {content, id , username} = this.data
        document.querySelector(".reviewsContainer").innerHTML += `
         <div class = "card">
         <p>content: ${content} By ${username} </p>
         </div>
        `
    }
}