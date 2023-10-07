const server = require("../server");



let io
exports.socketIoConnect=(server)=>{
     io = require("socket.io")(server,{
        cors:{
            origin:["http://localhost:4200"],
            methods: ["GET", "POST"]
        }

    })

    io.on("connection",(socket)=>{
        console.log(socket.id)
    })
}

exports.io = io

