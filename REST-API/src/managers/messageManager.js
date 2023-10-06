const utils = require("../utils/utils")
const messageModel = require("../models/messageModel")
const bcrypt = require("bcrypt")



exports.createMessage=async (message,owner)=>{
    return messageModel.create({text:message,owner})
    
}