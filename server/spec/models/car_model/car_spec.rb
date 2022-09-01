describe Car do
  let(:car) {Car.new}
  let(:attributes) do
    {
      vin: 1234,
      year: 2000,
      name: "Tesla",
      model: "Tesla Modex X",
      price: 100000,
      body_style: "Regular",
      color: "White",
      description: "Nice car",
      is_sold: false
    }
  end

  it "inherits from ActiveRecord::Base" do
    expect(Car.superclass).to eq(ActiveRecord::Base)
  end

  it 'has a VIN' do
    car.vin = 1234
    expect(car.vin.to_i).to eq(1234)
  end
end
