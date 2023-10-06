const utils = require("../utils/utils")
const roomModel = require("../models/roomModel")
const messageModel = require("../models/messageModel")
const bcrypt = require("bcrypt")


exports.createRoom=async (roomName)=>{
    return roomModel.create({name:roomName})
}
exports.addMessageToRoom=async (roomId,messageId)=>{
    const room = await roomModel.findById(roomId)
    if(!room) throw new Error("No such room")
    const message = await messageModel.findById(messageId)
    room.messages.push(message)
    return room.save()

}
