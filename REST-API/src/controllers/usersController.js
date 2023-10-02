const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => {
    res.status(200).json({message:"Successfully logged in"})
});
router.get("/register", (req, res) => {
    
    res.status(200).json({message:"Successfully logged in"})
});

module.exports = router;
