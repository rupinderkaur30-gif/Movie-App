class UserSerializer < ActiveModel::Serializer
  has_many :reviews
  has_many :movies
  attributes :id, :username
end
