const express = require("express");
const usersManager = require("../managers/usersManager");
const roomManager = require("../managers/roomManager");
const {isAuth} = require("../utils/auth");
const {login} = require("../managers/usersManager");

const router = express.Router();

router.post("/login",async (req, res) => {
    try {
            const {email,password} = req.body
            const payload = await usersManager.login(email,password)


            res.status(200).json({message:"Successfully logged in",payload})

    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
    }
});
router.post("/register", async (req, res) => {
    try {
        const {email,username,password,repeatedPassword} = req.body
        const payload = await usersManager.register(email,username,password,repeatedPassword)

    res.status(200).json({message:"Successfully registered", payload })
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    
});
router.get("/isTokenValid",isAuth,(req,res)=>{
    res.status(200).json({valid:true})
})

module.exports = router;
