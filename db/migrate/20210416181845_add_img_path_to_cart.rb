class AddImgPathToCart < ActiveRecord::Migration[5.2]
  def change
    add_column :cartitems, :imagepath, :string
  end
end
