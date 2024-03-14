const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: Object,
   
});

const CustomerModel = mongoose.model('CustomerAndProduct', customerSchema);

module.exports = CustomerModel;
