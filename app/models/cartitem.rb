class Cartitem < ApplicationRecord
    belongs_to :cart,
        primary_key: :id,
        foreign_key: :cart_id,
        class_name: :Cart

    has_one(:user, {
        through: :cart,
        source: :user
    })
end