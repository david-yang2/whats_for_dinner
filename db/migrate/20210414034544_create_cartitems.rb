class CreateCartitems < ActiveRecord::Migration[5.2]
  def change
    create_table :cartitems do |t|
      t.integer "cart_id", null: false
      t.string "name", null: false
      t.float "price", null: false
    end
  end
end
