const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehicleHistory = new Schema({
    vehicle_id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true,"Vechile ID is Required"]
    },
    user_id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true,"User ID is Required"]
    },
    pickup_location: {
        type: String,
        required: [true,"Pick UP Location is Mandatory"]
    },
    pickup_date_and_time: {
        type: Date,
        required: [true,"Pick UP Date and Time are Nescessary"]
    },
    dropoff_date_and_time: {
        type: Date,
        required: [true,"Drop Off Date and Time are Nescessary"]
    },
    mode_of_payment: {
        type: String,
        required: [true,"Payment mode must be mentioned"]
    },
    payment_details: {
        type: String,
        required: [true,"Payment Details are Required for Booking"],
        unique: [true,"Payment Details should be Unique"]
    },
    price: {
        type: Number,
        required: [true,"Price paid is Required"]
    },
    distance_travelled: {
        type: Number,
        required: [true,"Distance Travelled by Vechile is Mandatory"]
    },
    booking_status: {
        type: String,
        required: [true,"Booking Status is Important to notify the Users"]
    },
    Rating: Number,

})

module.exports = mongoose.model("VehicleHistory", VehicleHistory);