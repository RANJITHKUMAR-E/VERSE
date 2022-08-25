const mongoose = require('mongoose')
const Schema=mongoose.Schema;

const AccountSchema = new Schema({
    username:{
        type: String,
        required: [true,"Username Required for account"],
        unique: [true,"Username already exists"]
    },
    email_id: {
        type: String,
        required: [true,"Email is required for creating an account"],
        unique: [true, "Account related with this email already exists"],
    },
    password: {
        type: String,
        required: [true,"Password is Required"]
    },
    account_type: {
        type: String,
        required: [true,"Account Type  is Required"]
    }
});

module.exports = mongoose.model('Accounts', AccountSchema);