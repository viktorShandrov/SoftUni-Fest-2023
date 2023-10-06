const express = require("express");
const {isAuth} = require("../utils/auth");
const roomManager = require("../managers/roomManager");

const router = express.Router();

router.post("/createRoom",isAuth,async (req,res)=>{
    try {
        const {roomName} = req.body
        await roomManager.createRoom(roomName)
        res.status(200).end()
    }catch (error){
        res.status(400).json({message:error.message})
    }

})


module.exports = router;
