class User < ApplicationRecord
    has_secure_password
    has_many :registrations
    has_many :dance_classes, through: :registrations
end
