const express = require("express");
const usersManager = require("../managers/usersManager");
const roomManager = require("../managers/roomManager");
const {isAuth} = require("../utils/auth");

const router = express.Router();

router.post("/login",async (req, res) => {
    try {
            const {email,password} = req.body
            const payload = await usersManager.login(email,password)


            res.status(200).json({message:"Successfully logged in",payload})

    } catch (error) {
        res.status(400).json({message:error.message})
    }
});
router.post("/register", async (req, res) => {
    try {
        const {email,username,password,repetedPassword} = req.body
        const token = await usersManager.register(email,username,password,repetedPassword)

    res.status(200).json({message:"Successfully registered", token }) 
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    
});
router.get("/isTokenValid",isAuth,(req,res)=>{
    res.status(200).json({valid:true})
})

module.exports = router;
