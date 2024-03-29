# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_11_195622) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cartitems", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "name", null: false
    t.float "price", null: false
    t.text "description", null: false
    t.string "imagepath"
    t.text "review"
  end

  create_table "carts", force: :cascade do |t|
    t.integer "user_id", null: false
  end

  create_table "chefs", force: :cascade do |t|
    t.string "location", null: false
    t.text "bio", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name", null: false
    t.string "imagepath", null: false
  end

  create_table "dishes", force: :cascade do |t|
    t.string "name", null: false
  end

  create_table "items", force: :cascade do |t|
    t.integer "chef_id", null: false
    t.string "name", null: false
    t.text "description", null: false
    t.string "spiciness", null: false
    t.float "price", null: false
    t.string "imagepath", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "session_token", null: false
    t.text "cart", default: [], array: true
    t.string "email", null: false
    t.text "deliveryInstructions"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
