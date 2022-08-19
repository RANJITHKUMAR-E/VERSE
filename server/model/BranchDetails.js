const mongoose = require('mongoose')
const Schema=mongoose.Schema;

const BranchDetailsSchema = new Schema({
    company_license_number: {
        type: String,
        unique: true,
    },
    company_name: {
        type: String,
        unique: true,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    address: {  //doubt
        type: String,
        unique: true,
        required: true
    },
    vehicles_owned: [{
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        unique: true
    }],
    monthly_amount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("BranchDetails", BranchDetailsSchema);