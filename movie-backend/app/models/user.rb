class User < ApplicationRecord
    has_many :favorites
    has_many :reviews
    has_many :movies, through: :favorites
end
