const mongoose = require('mongoose')
const Schema=mongoose.Schema;

const UserDetailsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email_id: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    date_of_birth: {
        type: Date,
        required: true,
    },
    phone_number: {
        type: Number,
        require: true
    },
    driving_license_number: {
        type: Number,
        require: true
    },
})