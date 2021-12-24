class FavoriteController < ApplicationController

    def index
        favorites = Favorite.all
    end

    def create
        favorite = Favorite.create(favorite_params)
        render json: favorite
    end

    private

    def favorite_params
        params.permit(:user_id , :movie_id)
    end
end