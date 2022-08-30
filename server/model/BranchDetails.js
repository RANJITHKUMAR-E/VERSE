const mongoose = require('mongoose')
const Schema=mongoose.Schema;

const BranchDetailsSchema = new Schema({
    company_license_number: {
        type: String,
        unique: [true,"Company Already Registered"],
        match : [/^[a-zA-Z0-9]+$/, "Enter a valid Company License Number"]
    },

    //company name should be alphanumeric
    company_name: {
        type: String,
        required: [true,"Company Name is Required for Registering"],
        match : [/^[a-zA-Z0-9 ]+$/, "Enter a valid Company Name"]
    },

    location: {
        type: String,
        required: [true,"Comapny Location is Mandatory"],
        match : [/^[a-zA-Z ]+$/, "Enter a valid Company Name"]
    },

    address: {  //doubt
        type: String,
        unique: true,
        required: [true,"Company Address is nescessary for communication purposes"],
    },

    pin_code: {
        type: Number,
        required: [true,"Pin Code is Mandatory"],
    },

    vehicles_owned: [{
        type: mongoose.SchemaTypes.ObjectId,
        required: [true,"Atleast one vehicle needed to register as a company"],
    }],

    monthly_amount: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("BranchDetails", BranchDetailsSchema);