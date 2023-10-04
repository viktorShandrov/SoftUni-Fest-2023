const express = require("express");
const {expressConfig} = require("./config/expressConfig")
const {mongodbConfig} = require("./config/mongoDBConfig")

const server = express();

expressConfig(server)
mongodbConfig()

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
