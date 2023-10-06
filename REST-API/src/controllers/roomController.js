const express = require("express");
const {isAuth} = require("../utils/auth");
const roomManager = require("../managers/roomManager");

const router = express.Router();

router.post("/createRoom",isAuth,async (req,res)=>{
    const {roomName} = req.body
    await roomManager.createRoom(roomName)
})


module.exports = router;
