const utils = require("../utils/utils")
const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")


exports.register = async (email,username,password,repetedPassword) =>{

    
    if(!email||!password||!repetedPassword){
        throw new Error("All fields are required")
    }
    const user = await userModel.findOne({email})
    if(user){
        throw new Error("User with same email already exists")
    }

    return await userModel.create({email,username,password,repetedPassword})

}
exports.login = async(email,password)=>{
    const user = await userModel.findOne({email})
    if(!user){
        throw new Error("Email or password is incorrect")
    }

    const isPasswordMatching = await bcrypt.compare(password,user.password)

    if(!isPasswordMatching){
        throw new Error("Email or password is incorrect")
    }

    return  utils.sign({email,_id:user._id},utils.secret)
}