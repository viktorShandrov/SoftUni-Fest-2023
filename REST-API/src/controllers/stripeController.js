const express = require("express");
const usersManager = require("../managers/usersManager");
const offerManager = require("../managers/offerManager");
const stripe = require('stripe')('sk_test_51O65tmIWMDM378cGSVN4s2gEzeq6ARLUMgKvRItqGyk7VoBYf1egHR7ES7N24oo0bwwasiclhr1scnL2ls7mVH7T00d2ZdIxch');
const router = express.Router();


router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'T-shirt',
                    },
                    unit_amount: 2000,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
    });

    res.json({ id: session.id });
});

module.exports = router;
