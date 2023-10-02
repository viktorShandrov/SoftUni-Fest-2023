const express = require("express");
const usersManager = require("../managers/usersManager");

const router = express.Router();

router.get("/login", (req, res) => {
    try {


            res.status(200).json({message:"Successfully logged in"})

    } catch (error) {
        res.status(400).json({error:error.message}) 
    }
});
router.get("/register", async (req, res) => {
    try {
        const {email,username,password,repetedPassword} = req.body
        const newUser = await usersManager.register(email,username,password,repetedPassword)

    res.status(200).json({message:"Successfully registered"}) 
    } catch (error) {
        res.status(400).json({error:error.message}) 
    }
    
});

module.exports = router;
