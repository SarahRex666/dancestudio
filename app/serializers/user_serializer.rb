class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :admin, :first_name, :last_name, :address, :phone

  has_many :dance_classes
  has_many :registrations
end
