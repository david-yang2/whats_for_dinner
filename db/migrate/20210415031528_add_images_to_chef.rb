class AddImagesToChef < ActiveRecord::Migration[5.2]
  def change
    add_column :chefs, :imagepath, :string, null: false
  end
end

