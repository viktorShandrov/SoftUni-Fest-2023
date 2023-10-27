const express = require("express");
const usersManager = require("../managers/usersManager");

const router = express.Router();


router.post("/createOffer", async (req, res) => {
    try {
        const {email,companyName,firstName,lastName,password,repeatedPassword,userType} = req.body

        res.status(200).json({message:"Successfully registered", token })
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
    }

});
module.exports = router;
