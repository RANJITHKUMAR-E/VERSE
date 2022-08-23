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
        type: String,
        require: true,
        unique: true
    },
    vendor_account_details: {
        account_number: {
            type: Number,
            require: true,
            unique: true
        },
        account_holder_name: {
            type: String,
            require: true
        },
        ifsc_code: {
            type: String,
            require: true
        },
        account_holder_phone_number: {
            type: Number,
            require: true
        },
        upi_id: String,
    },
    // array of String with Id of Vendors
    vendor_id: [{
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        unique: true
    }],
    total_amount_collected: {
        type: Number,
        require:true
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