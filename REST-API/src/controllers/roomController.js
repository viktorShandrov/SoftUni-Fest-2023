const express = require("express");
const {isAuth} = require("../utils/auth");
const roomManager = require("../managers/roomManager");

const router = express.Router();

router.post("/createRoom",isAuth,async (req,res)=>{
    try {
        const {roomName} = req.body
        const {_id} =req.user
        await roomManager.createRoom(roomName,_id)
        res.status(200).end()
    }catch (error){
        res.status(400).json({message:error.message})
    }

})
router.post("/deleteRoom",isAuth,async (req,res)=>{
    try {
        const {roomId} = req.body
        const {_id} =req.user
        await roomManager.deleteRoom(roomId,_id)
        res.status(200).end()
    }catch (error){
        res.status(400).json({message:error.message})
    }

})
router.get("/joinRoom/:roomId",isAuth,async (req,res)=>{
    try {
        const {roomId} = req.params
        const {_id} =req.user
        const room = await roomManager.joinRoom(roomId,_id)
        res.status(200).json({room})
    }catch (error){
        res.status(400).json({message:error.message})
    }

})
router.post("/leaveRoom",isAuth,async (req,res)=>{
    try {
        const {roomId} = req.params
        const {_id} =req.user
        await roomManager.leaveRoom(roomId,_id)
        res.status(200).end()
    }catch (error){
        res.status(400).json({message:error.message})
    }

})
router.get("/giveJoinedRooms",isAuth,async (req,res)=>{
    try {
        const {_id} =req.user
        const rooms = await roomManager.giveJoinedRooms(_id)
        res.status(200).json({rooms})
    }catch (error){
        console.log(error);
        res.status(400).json({message:error.message})
    }

})
// router.post("/connectToRoom",isAuth,async (req,res)=>{
//     try {
//         const {roomId} = req.body
//         const {_id} =req.user
//         const messages = await roomManager.sendAllRoomMessages(roomId,_id)
//         res.status(200).json({messages})
//         roomManager.socketConnToRoom(roomId)
//     }catch (error){
//         res.status(400).json({message:error.message})
//     }
//
// })



module.exports = router;
