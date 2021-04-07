class Chef < ApplicationRecord
    validates :location, :bio, :name, presence: true
    has_many(:items, {
        primary_key: :id, #chef's id
        foreign_key: :chef_id,
        class_name: :Item
    })
end