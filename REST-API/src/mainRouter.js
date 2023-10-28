const express = require("express");
const userController = require("./controllers/usersController.js");
const itemsController = require("./controllers/itemsController.js");
const stripeController = require("./controllers/stripeController.js");

const mainRouter = express.Router();

mainRouter.use("/users", userController);
mainRouter.use("/items", itemsController);
mainRouter.use("/stripe", stripeController);

module.exports = mainRouter;
