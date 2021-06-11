class AddDeliveryInstructionsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :deliveryInstructions, :text
  end
end
