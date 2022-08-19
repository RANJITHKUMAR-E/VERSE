const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehiclesSchema = new Schema({
    vehicle_category: {
        type: String,
        required: true
    },
    vehicle_type: {
        type: String,
        required: true
    },
    brand_and_model: {
        vehicle_brands: {
            type: String,
            required: true
        },
        vehicle_model: {
            type: String,
            required: true
        },
    },
    mileage: {
        type:Number,
        required: true
    },
    Color: {
        type:String,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    rating: Number,
    availability_status: {
        status: {
            type: String,
            required: true
        },
        user_id: mongoose.SchemaTypes.ObjectId
    },
    fuel_type: {
        type: String,
        required: true
    },
    offers: {
        offers_availability: String,
        offer_details: String,
        offer_duration: Date,
    },
    vehicle_image: [{
        type:String,
        unique: true,
        required: true
    }],
    location: {
        type:String,
        required: true
    },
    vehicle_number: {
        type:String,
        unique: true,
        required: true
    },
    kilometers_travelled: {
        type:Number,
        required: true
    },
    year_of_purchase: {
        type:Date,
        required: true
    },
    bike_insurance_details: {
        type: String,
        required: true,
        unique: true
    },
    last_fc_date: {
        type:Date,
        required: true
    },
    vehicle_monthly_amount: {
        type: Number,
        required: true
    },
    pre_used_history: [{
        type: mongoose.SchemaTypes.ObjectId
    }]
})

module.exports = mongoose.model("Vehicles", VehiclesSchema);