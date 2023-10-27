const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const {Mongoose} = require("mongoose");

const schema = new mongoose.Schema({
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name:{
        type:String,
        required:[true,"name is required"],
    },
    description:{
        type:String,
        required:[true,"description is required"],
    },
    price:{
        type:String,
        required:[true,"price is required"],
    },


})



module.exports  = mongoose.model("Offer",schema)