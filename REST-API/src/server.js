const express = require("express");
const {expressConfig} = require("./config/expressConfig")
const {mongodbConfig} = require("./config/mongoDBConfig")
const socketIoConnect = require("./sockets/sockets")
const http = require("http");

const app = express();
const server = http.createServer(app)

expressConfig(app)
mongodbConfig()
socketIoConnect(server)


server.listen(3000, () => {
  console.log("Server listening on port 3000");
});


