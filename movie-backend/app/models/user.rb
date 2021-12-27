class User < ApplicationRecord
     has_many :reviews
     has_many :movies
     has_many :favorites
     has_many :favorite_movies, through: :favorites, source: :movie
end
