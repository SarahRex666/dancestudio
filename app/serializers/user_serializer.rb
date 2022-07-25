class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :admin, :first_name, :last_name, :address, :phone, :email

  has_many :dance_classes
  has_many :registrations
end
