class CreateDish < ActiveRecord::Migration[5.2]
  def change
    create_table :dishes do |t|

      t.string "name", null: false

    end
  end
end
