const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const schema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"email is required"],
    },
    companyName:{
        type:String,
    },
    userType:String,
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    isPasswordHashed: {
        type: Boolean,
        default: false,
      }

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