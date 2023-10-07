
const roomManager = require("../managers/roomManager");
const messageManager = require("../managers/messageManager");


let io

exports.socketIoConnect=(server)=>{
    try {

        io = require("socket.io")(server,{
            cors:{
                origin:["http://localhost:4200"],
                methods: ["GET", "POST"]
            }

        })
        io.on("connection",(socket)=>{
            socket.on("connectToRoom",async({roomId,userId})=>{
                const messages = await roomManager.sendAllRoomMessages(roomId,userId)
                socket.join(roomId)
                io.to(socket.id).emit("messages",messages)
            })
            socket.on("createMessage",async({messageText, roomId,userId})=>{
                const newMessage = await messageManager.createMessage(messageText, userId)
                await roomManager.addMessageToRoom(roomId, newMessage._id)
                io.to(roomId).emit("newMessage",newMessage)
            })
        })
    }catch (e) {
        console.log(e)
    }

}

exports.io = io

