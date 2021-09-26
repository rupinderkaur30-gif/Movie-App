class FavoritesController < ApplicationController

    def create
       if Favorite.where(favorite_params).exists?
        Favorite.where(favorite_params).destroy_all
        render json: {favorite: false}
       else
        Favorite.create(favorite_params)
        render json: {favorite: true}
       end
    end

    private

    def favorite_params
        params.permit(:movie_id, :user_id)
    end
end