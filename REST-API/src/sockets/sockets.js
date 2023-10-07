const io = require("socket.io")(3000,{
    cors:{
        origin:["http://localhost:4200"]
    }

})

io.on("connection",(socket)=>{
    console.log(socket.id)
})