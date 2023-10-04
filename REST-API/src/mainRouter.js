const express = require("express");
const userController = require("./controllers/usersController.js");
const itemsController = require("./controllers/itemsController.js");

const mainRouter = express.Router();

mainRouter.use("/users", userController);
mainRouter.use("/items", itemsController);

module.exports = mainRouter;
