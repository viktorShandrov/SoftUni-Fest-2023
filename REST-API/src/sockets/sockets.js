// const server = require("../server");


module.exports = function socketIoConnect(server){
    const io = require("socket.io")(server,{
        cors:{
            origin:["http://localhost:4200"],
            methods: ["GET", "POST"]
        }

    })

    io.on("connection",(socket)=>{
        console.log(socket.id)
    })
}


