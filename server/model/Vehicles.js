const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehiclesSchema = new Schema({
    vehicle_category: {
        type: String,
        required: [true, "Vehicle's Catagery is required"]
    },
    vehicle_type: {
        type: String,
        required: [true, "Vehicle's Type is required"]
    },
    brand_and_model: {
        vehicle_brands: {
            type: String,
            required: [true, "Vehicle's Brand is required"]
        },
        vehicle_model: {
            type: String,
            required: [true, "Vehicle's Model is required"]
        },
    },
    mileage: {
        type:Number,
        required: [true, "Vehicle's Mileage is required"]
    },
    Color: {
        type:String,
        required: [true, "Vehicle's Colour is needed"]
    },
    price: {
        type:Number,
        required: [true, "Vehicle's Price is required"]
    },

    rating: Number,
    
    availability_status: {
        availability: {
            type: Boolean,
            default : true
        },
        user_id: mongoose.SchemaTypes.ObjectId
    },
    fuel_type: {
        type: String,
        required: [true, "Fuel Type of the vehicle is required"]
    },
    offers: {
        offers_availability: String,
        offer_details: String,
        offer_duration: Date,
    },
    vehicle_image: [{
        data : Buffer,
        contentType:String,
        unique: [true, "Vehicle's Images are Repeted"],
        required: [true, "Vehicle's Images are needed"]
    }],
    vehicle_number: {
        type:String,
        unique: [true, "Vehicle Number is already exist"],
        required: [true, "Vehicle Number is required"]
    },
    kilometers_travelled: {
        type:Number,
        required: [true, "Kilometers Travelled by the vehicle is required"]
    },
    year_of_purchase: {
        type:Number,
        required: [true, "Vehicle's Purchase Year is required"]
    },
    bike_insurance_number: {
        type: String,
        required: [true, "Vehicle's Insurance number is required"],
        unique: [true, "This Insurance Number is linked to another vehicle"]
    },
    last_fc_date: {
        type:Date,
        required: [true, "Vehicle's Last FC Date is required"]
    },
    vehicle_monthly_amount: {
        type: Number,
        default: 0
    },
    pre_used_history: [{
        type: mongoose.SchemaTypes.ObjectId
    }]
})

module.exports = mongoose.model("Vehicles", VehiclesSchema);