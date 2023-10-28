const express = require("express");
const usersManager = require("../managers/usersManager");
const offerManager = require("../managers/offerManager");
const stripe = require('stripe')('sk_test_51O65tmIWMDM378cGSVN4s2gEzeq6ARLUMgKvRItqGyk7VoBYf1egHR7ES7N24oo0bwwasiclhr1scnL2ls7mVH7T00d2ZdIxch');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.post('/create-checkout-session', async (req, res) => {
    let {name,price,id} = req.body


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
        metadata: {
            productId: id, // Include the product ID here
        },
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
    });

    res.json({ id: session.id });
});


router.post("/paymentMade",(req,res)=>{

    try {
        // const sig = req.headers['stripe-signature'];
        // const event = stripe.webhooks.constructEvent(req.body, sig, "sk_test_51O65tmIWMDM378cGSVN4s2gEzeq6ARLUMgKvRItqGyk7VoBYf1egHR7ES7N24oo0bwwasiclhr1scnL2ls7mVH7T00d2ZdIxch");
        // console.log(req)
        const {type} = req.body
        console.log(req.body)
        console.log(type)
        if (type === 'payment_intent.succeeded') {
            // This is a successful payment event
            console.log("---------------------------------------------------------------------------")
            // Access event.data.object to get payment details
            const paymentIntent = event.data.object;
            console.log(paymentIntent)

            // Implement your logic for handling successful payments here
        }

        res.status(200).send('Webhook Received');
    } catch (err) {
        console.log(err)
        res.status(400).send('Webhook Error: ' + err.message);
    }
})


module.exports = router;
