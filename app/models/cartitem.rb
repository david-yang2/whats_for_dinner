class Cartitem < ApplicationRecord
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    # has_one(:user, {
    #     through: :cart,
    #     source: :user
    # })
end