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
        render json: {}
    end

    def update
        movie = Movie.find(params[:id])
        movie.update(movie_params)
        render json: movie
    end
end
private

def movie_params
    params.permit(:title, :image, :overview, :release_date, :rating, :user_id)
end