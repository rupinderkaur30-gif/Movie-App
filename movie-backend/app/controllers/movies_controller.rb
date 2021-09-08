class MoviesController < ApplicationController

    def index
        movies = Movie.all
        render json: movies
    end 

    def create
        movie = Movie.create(movie_params)
        render json: movie
    end

    def destroy
        movie = Movie.find(params[:id])
        movie.destroy
    end
end
private

def movie_params
    params.require(:movie).permit(:title, :image, :overview, :release_date, :rating)
end