class Dish < ApplicationRecord

    SPICINESS_LEVEL = [
        "Non-Spicy",
        "Mild",
        "Medium",
        "Spicy"
    ]
    validates :chef_id, :name, :description, :spiciness, presence: true
    validates :spiciness, inclusion: SPICINESS_LEVEL

    belongs_to :chef
end