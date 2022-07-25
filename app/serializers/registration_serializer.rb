class RegistrationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :dance_class_id

  belongs_to :dance_class
  belongs_to :user
end
