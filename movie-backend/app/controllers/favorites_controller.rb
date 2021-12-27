class FavoritesController < ApplicationController

    def index
        user = User.find(params[:user_id])
        favorites = user.favorite_movies
        render json: favorites
    end

    def create
        if Favorite.where(favorite_params).exists?
            Favorite.where(favorite_params).destroy_all
            render json: {favorite: false, movie_id: favorite_params[:movie_id]}
        else
           favorite = Favorite.create(favorite_params)
           render json: {favorite: true, movie_id: favorite_params[:movie_id]}
        end
    end

    private

    def favorite_params
        params.permit(:user_id , :movie_id)
    end
end