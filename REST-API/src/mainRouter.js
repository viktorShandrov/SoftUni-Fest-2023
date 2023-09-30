const express = require("express");
const userController = require("./controllers/userController");
const itemsController = require("./controllers/itemsController");
const mainRouter = express.Router();

mainRouter.use("/users", userController);
mainRouter.use("/items", itemsController);

module.exports = router;
