const express = require("express");
const usersManager = require("../managers/usersManager");
const offerManager = require("../managers/offerManager");
const stripe = require('stripe')('sk_test_51O65tmIWMDM378cGSVN4s2gEzeq6ARLUMgKvRItqGyk7VoBYf1egHR7ES7N24oo0bwwasiclhr1scnL2ls7mVH7T00d2ZdIxch');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.post('/create-checkout-session', async (req, res) => {
    let {name,price,offerId,userId} = req.body


    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name:name,
                    },
                    unit_amount: Number(price*100),
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/successfulPayment',
        cancel_url: 'http://localhost:3000/unsuccessfulPayment',
        metadata: {
            userId,
            offerId
        },
    });

    res.json({ id: session.id });
});


router.post("/paymentMade",(req,res)=>{

    try {

        const {type,data} = req.body

        if (type === 'checkout.session.completed') {


            const {userId,offerId} = data.object.metadata

            offerManager.addOfferToPurchasedOffers(userId,offerId)
        }

        res.status(200).send('Webhook Received');
    } catch (err) {
        console.log(err)
        res.status(400).send('Webhook Error: ' + err.message);
    }
})


module.exports = router;
