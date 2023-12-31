const express = require("express");
const usersManager = require("../managers/usersManager");
const offerManager = require("../managers/offerManager");
const {isAuth} = require("../utils/auth");

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/offer/:id",isAuth, async (req, res) => {
    try {
        const {id} = req.params
        const {_id} = req.user

        const offer = await offerManager.getOffer(id)
        res.status(200).json({offer})
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
    }

});
router.post("/createOffer", async (req, res) => {
    try {
        const {name,description,price,type} = req.body
        const {_id} = req.user


        const offer = await offerManager.createOffer(name,description,price,_id,type)
        res.status(200).json({offer})
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
    }

});

router.post("/editOffer", async (req, res) => {
    try {
        const {_id,name,description,price} = req.body
        // const {_id:userId} = req.user
        console.log(_id)
        const offer = await offerManager.editOffer(_id,name,description,price)
        res.status(200).json({offer})
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
    }

});
router.post("/deleteOffer", async (req, res) => {
    try {
        const {offerId} = req.body
        const {_id} = req.user
        await offerManager.deleteOffer(offerId,_id)
        res.status(200).end()
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
    }

});
router.get("/searchBusinessman/:searchParam", async (req, res) => {
    try {
        // const {offerId,name,description,price} = req.body
        const {searchParam} = req.params
        const offers = await offerManager.searchBusinessman(searchParam)
        res.status(200).json({offers})
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
    }

});
router.get("/getTopOfferCategories", async (req, res) => {
    try {
        // const {offerId,name,description,price} = req.body
        const categories = await offerManager.getTopOfferCategories()
        res.status(200).json({categories})
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
    }

});

module.exports = router;
