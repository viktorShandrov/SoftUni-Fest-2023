const utils = require("../utils/utils")
const roomModel = require("../models/roomModel")
const messageModel = require("../models/messageModel")
const io = require("../sockets/sockets")
const bcrypt = require("bcrypt")


exports.createRoom=async (roomName,owner)=>{
    return roomModel.create({name:roomName,owner})
}
exports.deleteRoom=async (roomId,userId)=>{
    const room = await roomModel.findById(roomId)
    if(!room) throw new Error("No such room")

    if(!userId.equals(room.owner)) throw new Error("You are not the owner of this room")

    return roomModel.findByIdAndDelete(roomId)
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
exports.leaveRoom = async (roomId,userId)=>{
    const room = await roomModel.findById(roomId)
    if(!room) throw new Error("No such room")

    const userIndex = room.members.indexOf(userId)
    if(userIndex<0) throw new Error("No such user in room")

    room.members.splice(userIndex,1)
    return room.save()
}
exports.giveJoinedRooms = async (userId)=>{
    const rooms = await roomModel.find({
        members: userId
    })

    return rooms
}
exports.sendAllRoomMessages=async(roomId,userId)=>{
    const room = await roomModel.findById(roomId).populate("messages")
    if(!room) throw new Error("No such room")
    if(!room.members.includes(userId)) throw new Error("No such member in room")
    return  room.messages
}
exports.socketConnToRoom =async (roomId)=>{
    const room = await roomModel.findById(roomId)
    if(!room) throw new Error("No such room")
    io.join(roomId)
}
