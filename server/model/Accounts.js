const mongoose = require('mongoose')
const Schema=mongoose.Schema;
const {isEmail} = require('validator')

const AccountSchema = new Schema({

    //username contains only alphanumeric
    username:{
        type: String,
        required: [true,"Username Required for account"],
        unique: [true,"Username already exists"],
        match : [/^[A-Za-z][A-Za-z0-9_]{4,29}$/, "Enter a valid Username"]
    },
    
    email_id: {
        type: String,
        required: [true,"Email is required for creating an account"],
        unique: [true, "Account related with this email already exists"],
        validate : [isEmail,"Enter a valid Email Address"]
    },
    
    //password with one Uppercase, one lower case, one number, one string, atleast 8 characters

    password: {
        type: String,
        required: [true,"Password is Required"],
        match : [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Enter a valid Password"]
    },
    
    account_type: {
        type: String,
        required: [true,"Account Type  is Required"]
    }
});

module.exports = mongoose.model('Accounts', AccountSchema);