const userModel = require("../models/userModel")



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