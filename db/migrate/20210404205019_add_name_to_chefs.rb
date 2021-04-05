class AddNameToChefs < ActiveRecord::Migration[5.2]
  def change
    add_column :chefs, :name, :string, null: false
    remove_column :chefs, :title
  end
end
