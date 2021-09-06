class MovieSerializer < ActiveModel::Serializer
  attributes :title, :image, :overview, :release_date, :rating, :id
end
