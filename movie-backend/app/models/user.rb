class User < ApplicationRecord
     has_many :reviews
     has_many :movies
end
