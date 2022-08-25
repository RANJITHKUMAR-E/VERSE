const mongoose = require('mongoose')
const Schema=mongoose.Schema;

const BranchDetailsSchema = new Schema({
    company_license_number: {
        type: String,
        unique: [true,"Company Already Registered"]
    },
    company_name: {
        type: String,
        //unique: [true,"Company Name should be Unique"]
        required: [true,"Company Name is Required for Registering"]
    },
    location: {
        type: String,
        required: [true,"Comapny Location is Mandatory"]
    },
    address: {  //doubt
        type: String,
        unique: true,
        required: [true,"Company Address is nescessary for communication purposes"]
    },
    vehicles_owned: [{
        type: mongoose.SchemaTypes.ObjectId,
        required: [true,"Atleast one vehicle needed to register as a company"],
        //unique: [true,"Vechiles Owned should be there Own vechiles,vechile should not be in Loan Due"]
    }],
    monthly_amount: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("BranchDetails", BranchDetailsSchema);