const express = require("express");
const cors = require("cors");
const {auth} = require("../utils/auth.js")
const mainRouter = require("../mainRouter.js")


exports.expressConfig = (server) => {


  const corsMiddleware = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    next();
  };
  const allowedOrigins = [
    "http://localhost:4200",
  ];
  server.use(
    cors({
      origin: allowedOrigins,
    })
  );
  server.use(auth);
  server.use(mainRouter);
};
