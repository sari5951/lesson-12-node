const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    product: Object,
   
});

const CustomerModel = mongoose.model('product', customerSchema);

module.exports = CustomerModel;
