class Chef < ApplicationRecord
    validates :name, :location, presence: true
end