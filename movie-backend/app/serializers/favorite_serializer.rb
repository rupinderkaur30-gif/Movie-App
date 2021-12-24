class FavoriteSerializer < ActiveModel::Serializer
    belongs_to :movie
    belongs_to :user
    attributes :id , :username
end