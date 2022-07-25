class DanceClassSerializer < ActiveModel::Serializer
  attributes :id, :name, :style, :description, :time

  has_many :registrations

end
