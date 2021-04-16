class AddReviewToCartItems < ActiveRecord::Migration[5.2]
  def change
    add_column :cartitems, :review, :text
  end
end
