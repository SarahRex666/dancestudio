class DanceClassSerializer < ActiveModel::Serializer
  attributes :id, :name, :style, :description, :time, :user_id
end
