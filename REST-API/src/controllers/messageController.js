const express = require("express");
const {isAuth} = require("../utils/auth");
const roomManager = require("../managers/roomManager");
const messageManager = require("../managers/messageManager");

const router = express.Router();


router.post("/createMessage",isAuth,async (req,res)=> {
    try {
        const {messageText, roomId} = req.body
        const {_id} = req.user
        const newMessage = await messageManager.createMessage(messageText, _id)
        await roomManager.addMessageToRoom(roomId, newMessage._id)
        res.status(200).end()
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})
router.post("/deleteMessage",isAuth,async (req,res)=>{
    try{
        const {roomId,messageId} = req.body
        const {_id}= req.user
        await messageManager.deleteMessage(roomId,messageId,_id)
        res.status(200).end()
    }catch (error){
        res.status(400).json({message:error.message})
    }

})

module.exports = router
