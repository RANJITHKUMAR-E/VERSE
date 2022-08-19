const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehicleHistory = new Schema({
    vehicle_id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    user_id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    pickup_location: {
        type: String,
        required: true
    },
    pickup_date_and_time: {
        type: Date,
        required: true
    },
    dropoff_date_and_time: {
        type: Date,
        required: true
    },
    mode_of_payment: {
        type: String,
        required: true
    },
    payment_details: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    distance_travelled: {
        type: Number,
        required: true
    },
    booking_status: {
        type: String,
        required: true
    },
    Rating: Number,

})

module.exports = mongoose.model("VehicleHistory", VehicleHistory);