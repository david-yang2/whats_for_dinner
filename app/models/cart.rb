class Cart < ApplicationRecord
    belongs_to: :user,
        primary_key: :id
        foreign_key: :user_id
        class_name: :User

    has_many: :cartitems
        primary_key: :id
        foreign_key: :cart_id
        class_name: :Cartitem
end