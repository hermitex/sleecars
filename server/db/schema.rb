# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_01_201758) do
  create_table "cars", force: :cascade do |t|
    t.string "vin"
    t.integer "year"
    t.string "name"
    t.string "model"
    t.string "manufacture"
    t.string "make"
    t.string "version"
    t.string "transmission"
    t.string "drive_type"
    t.string "fuel_type"
    t.string "style"
    t.string "car_type"
    t.string "car_options"
    t.string "standard_specs"
    t.integer "door_count"
    t.integer "engine_size"
    t.string "license_plate"
    t.float "price"
    t.float "milage"
    t.string "body_style"
    t.string "color"
    t.text "description"
    t.boolean "is_sold"
  end
end
