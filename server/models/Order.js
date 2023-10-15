const mongoose = require("mongoose");

const orderSchema =new mongoose.Schema({
    name: {
        type: String
    },
    Descripton: {
        type: String
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:60 * 5,

    },
    weight:{
        type:String,
        required:true,
    },
    Source:{
        type:String,
        required:true,
    },
    Destination:{
        type:String,
        required:true,
    },
    Approved:{
        type: Boolean,
        default: true,
    },
    Status:{
        type:String,
        required:true,
    },
    DeliveringTime:{
        type:String,
        required:true,
    },
    amount: {
        type: Boolean,
        default: true,
    }
})

module.exports = mongoose.model("Order", orderSchema);