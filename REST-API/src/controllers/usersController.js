const express = require("express");
const usersManager = require("../managers/usersManager");

const router = express.Router();

router.post("/login",async (req, res) => {
    try {
            const {email,password} = req.body
            console.log(req.body)
            const token = await usersManager.login(email,password)

            res.status(200).json({message:"Successfully logged in",token})

    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
    }
});
router.post("/register", async (req, res) => {
    try {
        const {email,companyName,firstName,lastName,password,repeatedPassword,userType} = req.body

        const token = await usersManager.register(email,companyName,password,repeatedPassword,userType,lastName,firstName)

    res.status(200).json({message:"Successfully registered", token }) 
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
    }
    
});

module.exports = router;
