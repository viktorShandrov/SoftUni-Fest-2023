const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const schema = new mongoose.Schema({
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
schema.virtual("repetedPassword").set(function(value){
    if(this.password!==value){
        throw new Error("Passwords mismach!")
    }
})
schema.pre("save",async function(){
    if(this.password&&!this.isPasswordHashed){
        this.password = await bcrypt.hash(this.password,3);
        this.isPasswordHashed = true
    }
})


module.exports  = mongoose.model("User",schema) 