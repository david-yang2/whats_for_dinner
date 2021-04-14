class AddDescriptionToCartitems < ActiveRecord::Migration[5.2]
  def change
    add_column :cartitems, :description, :text, null: false
  end
end
