const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    text:{
        type:String,
    },
    createdAt:{
        type:Date,
        default: new Date()
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },


})


module.exports  = mongoose.model("Message",schema)