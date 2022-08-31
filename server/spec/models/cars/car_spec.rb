describe Car do
    let(:car) {Car.new}
    let(:attributes) do
        {
            VIN: 1234,
            year: 2000,
            name: "Car",
            model: "Some Model",
            price: 2000,
            milage: 1000000,
            body_style: "Regular",
            color: "brown",
            description: "Some Description",
            is_sold: false
        }
    end
    it 'inherits from ActiveRecord::Base' do
        expect(Car.superclass).to   eq(ActiveRecord::Base)
    end
end
