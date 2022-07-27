class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :teacher_id, :content, :rating, :user, :teacher

  belongs_to :teacher
  belongs_to :user
end
