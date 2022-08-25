const mongoose = require('mongoose')
const Schema=mongoose.Schema;

const CustomerCareSchema = new Schema({
    name: {
        type: String,
        required: [true,"Name is required for Registraion"],
        unique: [true,"Name should be Unique"]
    },
    email_id: {
        type: String,
        required: [true,"Email is required for creating an account"],
        unique: [true, "Account related with this email already exists"]
    },
    phone_number: Number,
    queryreceived: {
        type: String,
        require: [true,"Query Cannot be Empty, Please give some Valid Details"]
    }
});

module.exports = mongoose.model('CustomerCare', CustomerCareSchema);