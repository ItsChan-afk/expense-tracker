const mongoose = require('mongoose')

const TransactionSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price: {
        type: Number,
        required : true
    },
    dateTime : {
        type : Date ,
        required : true
    },
    description : {
        type : String,
        required : true
    }

})

TransactionModel = mongoose.model('Trasaction' , TransactionSchema)
module.exports = TransactionModel