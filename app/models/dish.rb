class Dish < ApplicationRecord

    SPICINESS_LEVEL = [
        "Non-Spicy",
        "Mild",
        "Medium",
        "Spicy"
    ]
    validates :menu_id, :name, :description, :spiciness, presence: true
    validates :spiciness, inclusion: SPICINESS_LEVEL

    belongs_to :menu
end