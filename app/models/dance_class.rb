class DanceClass < ApplicationRecord
    has_many :registrations
    has_many :users, through: :registrations
    belongs_to :teacher
    accepts_nested_attributes_for :users
end
