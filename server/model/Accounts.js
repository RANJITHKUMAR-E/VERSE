const mongoose = require('mongoose')
const Schema=mongoose.Schema;

const AccountSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    email_id: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    account_type: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Accounts', AccountSchema);