class Teacher < ApplicationRecord
    has_many :dance_classes
    has_many :reviews
end
