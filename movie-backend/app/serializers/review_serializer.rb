class ReviewSerializer < ActiveModel::Serializer
  belongs_to :movie
  belongs_to :user
  attributes :id , :content , :username

  def username
    object.user.username
  end
end
