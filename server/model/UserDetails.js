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
    username: {
        type: String,
        required: [true,"Username Required for creating an account"],
        unique: [true,"Username already exists"]
        
    },
    date_of_birth: {
        type: Date,
        required: [true, "Date of Birth is required for creating an account"],
    },
    phone_number: {
        type: Number,
        require: [true, "Phone Number is required for creating an account"]
    },
    driving_license_number: {
        type: String,
        require: [true, "Driving License Number is required for creating an account"],
        unique: [true, "Account related with this Driving License Number already exists"]
    },
    vendor_account_details: {
        account_number: {
            type: Number,
            require: [true, "Account Number is required for creating an account"],
            unique: [true, "Account Number already used"]
        },
        account_holder_name: {
            type: String,
            require: [true, "Name is required for creating an account"]
        },
        ifsc_code: {
            type: String,
            require: [true, "IFSC code is required for creating an account"]
        },
        account_holder_phone_number: {
            type: Number,
            require: [true, "Phone Number is required for creating an account"]
        },
        upi_id: String,
    },
    // array of String with Id of Vendors
    vendor_id: [{
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, "No Vehicles are linked with this Vendor"],
        unique: true
    }],
    total_amount_collected: {
        type: Number,
        default: 0
    },
    //vehicle booked status from vehicle history
  /*  vehicle_status: {
        type: mongoose.SchemaTypes.ObjectId,
        require:true
    },*/
    
    // vehicle id from vehicle history & include current vechicle booked status
    pre_used_vehicle: [{
        type: mongoose.SchemaTypes.ObjectId,
    }]
})

module.exports=mongoose.model('UserDetails',UserDetailsSchema);