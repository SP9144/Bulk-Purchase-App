const mongoose = require('mongoose');

let Pdt = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    status: {
        type: String
    },
    vendorname: {
        type: String
    } 
});

module.exports = mongoose.model('Pdt', Pdt);
