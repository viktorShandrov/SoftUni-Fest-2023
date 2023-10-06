const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    name:{
        type:String,
    },
    members:[{
        type:mongoose.Types.ObjectId,
        ref:"user"
    }],
    createdAt:{
        type:Date,
        default: new Date()
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    messages:[
        {
            type:mongoose.Types.ObjectId,
            ref:"message"
        }
    ]

})


module.exports  = mongoose.model("Room",schema)