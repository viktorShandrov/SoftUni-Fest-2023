const express = require("express");
const userController = require("./controllers/usersController.js");
const roomController = require("./controllers/roomController.js");
const messageController = require("./controllers/messageController");

const mainRouter = express.Router();

mainRouter.use("/users", userController);
mainRouter.use("/rooms", roomController);
mainRouter.use("/messages", messageController);

module.exports = mainRouter;
