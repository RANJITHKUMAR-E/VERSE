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
        match : [/\s+(?:0[1-9]|[12][0-9]|3[01])[-/.](?:0[1-9]|1[012])[-/.](?:19\d{2}|20[01][0-9]|2020)\b/, "Enter a valid Date of birth"],
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
        unique: [true, "Account related with this Driving License Number already exists"],
        match : [/^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/, "Enter a valid driving_license number"]
    },
    vendor_account_details: {
        account_number: {
            type: Number,
            unique: [true, "Account Number already used"],
        },
        account_holder_name: {
            type: String,
        },
        ifsc_code: {
            type: String,
            match : [/^[A-Za-z]{4}[a-zA-Z0-9]{7}$/, "Enter a valid IFSC code"]
        },
        account_holder_phone_number: {
            type: Number,
            min: [1000000000, "Enter a Valid Phone number"]
        },
        upi_id:{
            type: String,
            match : [/^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/, "Enter a valid UPI ID"]
        } 
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