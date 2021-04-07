class Item < ApplicationRecord

    SPICINESS_LEVEL = [
        "Non-Spicy",
        "Mild",
        "Medium",
        "Spicy"
    ]
    validates :chef_id, :name, :description, :spiciness, presence: true
    validates :spiciness, inclusion: SPICINESS_LEVEL

    belongs_to(:chef, {
        primary_key: :id, #Chef's id
        foreign_key: :chef_id, #Item's table
        class_name: :Chef
    })
end