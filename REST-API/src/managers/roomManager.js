const utils = require("../utils/utils")
const roomModel = require("../models/roomModel")
const bcrypt = require("bcrypt")


exports.createRoom=async (roomName)=>{
    return roomModel.create({name:roomName})
}
exports.createMessage=async (roomId)=>{
    const room = roomModel.findById(roomId)
    if(!room) throw new Error("No such room")

}