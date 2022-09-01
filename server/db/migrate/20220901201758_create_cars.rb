class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :vin
      t.integer :year
      t.string :name
      t.string :model
      t.string :manufacture
      t.string :make
      t.string :version
      t.string :transmission
      t.string :drive_type
      t.string :fuel_type
      t.string :style
      t.string :car_type
      t.string :car_options, array: true
      t.string :standard_specs, array: true
      t.integer :door_count
      t.integer :engine_size
      t.string :license_plate
      t.float :price
      t.float :milage
      t.string :body_style
      t.string :color
      t.text :description
      t.boolean :is_sold
    end
  end
end
