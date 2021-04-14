class ChangeCartIDtoUserId < ActiveRecord::Migration[5.2]
  def change
    rename_column :cartitems, :cart_id, :user_id
  end
end
