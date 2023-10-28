const express = require("express");
const usersManager = require("../managers/usersManager");
const {isAuth} = require("../utils/auth");
const offerManager = require("../managers/offerManager");

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.post("/login",async (req, res) => {
    try {
            const {email,password} = req.body
            console.log(req.body)
            const payload = await usersManager.login(email,password)

            res.status(200).json({message:"Successfully logged in",payload})

    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
    }
});
router.post("/register", async (req, res) => {
    try {
        const {email,companyName,firstName,lastName,password,repeatedPassword,userType} = req.body

        const payload = await usersManager.register(email,companyName,password,repeatedPassword,userType,lastName,firstName)

    res.status(200).json({message:"Successfully registered", payload })
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
    }
    
});
router.get("/userInfo",isAuth, async (req, res) => {
    try {
        const {_id} = req.user

        const user = await usersManager.getUserInfo(_id)

    res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
    }

});
router.get("/userProfileInfo/:id",isAuth, async (req, res) => {
    try {
        const {id} = req.params

        const user = await usersManager.userProfileInfo(id)

    res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
    }

});

router.get("/getAllBusinessman", async (req, res) => {
    try{

        const businessman = await usersManager.getAllBusinessman()
        res.status(200).json({users:businessman})
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
    }

});

module.exports = router;
