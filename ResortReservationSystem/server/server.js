require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const resortItems = new Map([
    [1, {priceInShillings: 4000, name: "Old Swahili Single"}],
    [2, {priceInShillings:6500, name:"Old Swahili Double"}],
    [3, {priceInShillings:7500, name:"Old Swahili Singl-Deluxe"}],
    [4, {priceInShillings:9000, name:"Old Swahili Double-Deluxe"}],

])
app.post("/ResortReservationSystem", async(req,res) =>{
    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode:'payment',
            line_items: req.body.items.map(item => {
                const resortItem = resortItems.get(item.id)
                return{
                    price_data: {
                        currency:'ksh',
                        product_data: {
                            name:resortItem.name
                        },
                        unit_amount: resortItem.priceInShillings
                    },
                    quantity: item.quantity,
                }
            }),
            success_url:'{$process.env.SERVER_URL}/success.html',
            cancel_url:'{$process.env.SERVER_URL}/cancel.html'
        });
    }catch (e) {
        res.status(500).json({ error: e.message})
    }
});
app.listen(3000)