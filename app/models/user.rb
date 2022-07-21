class User < ApplicationRecord
    has_secure_password
    has_many :registrations
    has_many :dance_classes, through: :registrations

    validates :username, uniqueness: true
    validates :email, uniqueness: true
end
