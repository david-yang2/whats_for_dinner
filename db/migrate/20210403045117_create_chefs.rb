class CreateChefs < ActiveRecord::Migration[5.2]
  def change
    create_table :chefs do |t|
      t.string :title, null: false
      t.string :location, null: false
      t.text :bio, null: false

      t.timestamps
    end
  end
end
