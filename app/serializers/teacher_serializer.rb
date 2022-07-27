class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :dance_classes, :image_url, :reviews

  has_many :reviews
end
