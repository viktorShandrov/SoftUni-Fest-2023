const server = require("../server");
const roomManager = require("../managers/roomManager");



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
                io.to(socket.id).emit("messages",messages)
            })
        })
    }catch (e) {
        console.log(e)
    }

}

exports.io = io

