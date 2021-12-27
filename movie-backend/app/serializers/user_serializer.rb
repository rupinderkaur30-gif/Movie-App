class UserSerializer < ActiveModel::Serializer
  # has_many :reviews
   has_many :favorite_movies
  attributes :id, :username
end
