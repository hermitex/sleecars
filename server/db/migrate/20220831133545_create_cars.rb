class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :name
      t.integer :VIN
      t.integer :year
      t.string :model
      t.float :price
      t.integer :milage
      t.string :body_style
      t.string :color
      t.text :description
      t.boolean :is_sold
      t.timestamps
  end
end
