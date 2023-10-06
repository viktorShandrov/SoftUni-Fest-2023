const express = require("express");
const {isAuth} = require("../utils/auth");
const roomManager = require("../managers/roomManager");
const messageManager = require("../managers/messageManager");

const router = express.Router();


router.post("/createMessage",isAuth,async (req,res)=>{
    const {messageText,roomId} = req.body
    const {_id}= req.user
    const newMessage = await messageManager.createMessage(messageText,_id)
    await roomManager.addMessageToRoom(roomId,newMessage._id)
})

module.exports = router;
