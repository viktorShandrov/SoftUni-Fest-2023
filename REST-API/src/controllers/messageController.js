const express = require("express");
const {isAuth} = require("../utils/auth");
const roomManager = require("../managers/roomManager");

const router = express.Router();


router.post("/createMessage",isAuth,async (req,res)=>{
    const {roomId} = req.body
    await roomManager.createRoom(roomName)
    await 
})

module.exports = router;
