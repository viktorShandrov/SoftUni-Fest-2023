const utils = require("../utils/utils")
const roomModel = require("../models/roomModel")
const messageModel = require("../models/messageModel")
const bcrypt = require("bcrypt")


exports.createRoom=async (roomName,owner)=>{
    return roomModel.create({name:roomName,owner})
}
exports.addMessageToRoom=async (roomId,messageId)=>{
    const room = await roomModel.findById(roomId)
    if(!room) throw new Error("No such room")
    const message = await messageModel.findById(messageId)
    room.messages.push(message)
    return room.save()

}
exports.joinRoom = async (roomId,userId)=>{
    const room = await roomModel.findById(roomId)
    if(!room) throw new Error("No such room")
    room.members.push(userId)
    return room.save()
}
