class FavoriteController < ApplicationController

    def index
        favorites = Favorite.all
    end

    def create
        if Favorite.where(favorite_params).exits?
            Favorite.where(favorite_params).destroy_all
            render json: {favorite: false, movie_id: favorite_params(movie_id)}
        else
           favorite = Favorite.create(favorite_params)
           render json: {favorite: true, movie_id: favorite_params(movie_id)}
        end
    end

    private

    def favorite_params
        params.permit(:user_id , :movie_id)
    end
end