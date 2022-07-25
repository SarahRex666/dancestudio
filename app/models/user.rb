class User < ApplicationRecord
    has_secure_password
    has_many :registrations
    has_many :dance_classes, through: :registrations
    accepts_nested_attributes_for :dance_classes, allow_destroy: true

    validates :username, uniqueness: true
    validates :email, uniqueness: true
end
