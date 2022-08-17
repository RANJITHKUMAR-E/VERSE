const mongoose = require('mongoose')
const Schema=mongoose.Schema;

const CustomerCareSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email_id: {
        type: String,
        unique: true,
        required:true
    },
    phone_number: Number,
    queryreceived: {
        type: String,
        require: true,
    }
});

module.exports = mongoose.model('CustomerCare', CustomerCareSchema);