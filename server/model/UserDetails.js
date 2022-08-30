const mongoose = require('mongoose')
const Schema=mongoose.Schema;
const {isEmail} = require('validator')

const UserDetailsSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required for creating an account"],
    },
    email_id: {
        type: String,
        required: [true,"Email is required for creating an account"],
        unique: [true, "Account related with this email already exists"],
        validate : [isEmail,"Enter a valid Email Address"]
    },

    /*A valid username should start with an alphabet so, [A-Za-z].
    All other characters can be alphabets, numbers or an underscore so, [A-Za-z0-9_].
    Since length constraint was given as 8-30 and we had already fixed the first character, so we give {7,29}.*/

    username: {
        type: String,
        required: [true,"Username Required for creating an account"],
        unique: [true,"Username already exists"],
        match : [/^[A-Za-z][A-Za-z0-9_]{4,29}$/, "Enter a valid Username"]
    },
    date_of_birth: {
        type: Date,
        required: [true, "Date of Birth is required for creating an account"],
        trim: true
    },
    phone_number: {
        type: Number,
        required: [true, "Phone Number is required for creating an account"],
        min: [1000000000, "Enter a Valid Phone number"]
    },
    driving_license_number: {
        type: String,
        required: [true, "Driving License Number is required for creating an account"],
        unique: [true, "Account related with this Driving License Number already exists"]
    },
    vendor_account_details: {
        account_number: {
            type: Number,
            unique: [true, "Account Number already used"]
        },
        account_holder_name: {
            type: String,
        },
        ifsc_code: {
            type: String,
        },
        account_holder_phone_number: {
            type: Number,
        },
        upi_id: String,
    },
    // array of String with Id of Vendors
    vendor_id: [{
        type: mongoose.SchemaTypes.ObjectId,
        //required: [true, "No Vehicles are linked with this Vendor"],
        unique: true
    }],
    total_amount_collected: {
        type: Number,
        default: 0
    },
    
    // vehicle id from vehicle history & include current vechicle booked status
    pre_used_vehicle: [{
        type: mongoose.SchemaTypes.ObjectId,
    }]
})



module.exports=mongoose.model('UserDetails',UserDetailsSchema);