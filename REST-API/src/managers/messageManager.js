const utils = require("../utils/utils")
const messageModel = require("../models/messageModel")
const bcrypt = require("bcrypt")
const roomModel = require("../models/roomModel");



exports.createMessage=async (message,owner)=>{
    return messageModel.create({text:message,owner})
    
}
exports.deleteMessage=async (roomId,messageId,userId)=>{
    const room = await roomModel.findById(roomId)
    if(!room) throw new Error("No such room")

    const message = await messageModel.findById(messageId)
    if(!message) throw new Error("No such message")

    if(!message.owner.equals(userId)) throw new Error("You are not the owner of this message")

    const messageIndex = room.messages.indexOf(messageId)
    room.messages.splice(messageIndex,1)
    return room.save()
}