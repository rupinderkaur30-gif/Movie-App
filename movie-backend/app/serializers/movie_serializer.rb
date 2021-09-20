class MovieSerializer < ActiveModel::Serializer
  has_many :reviews
  attributes :title, :image, :overview, :release_date, :rating, :id
end
