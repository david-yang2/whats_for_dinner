class Chef < ApplicationRecord
    validates :location, :bio, :name, presence: true
    has_many :dishes
end