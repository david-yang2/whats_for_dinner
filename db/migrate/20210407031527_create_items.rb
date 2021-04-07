class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.integer "chef_id", null: false
      t.string "name", null: false
      t.text "description", null: false
      t.string "spiciness", null: false
    end
  end
end
