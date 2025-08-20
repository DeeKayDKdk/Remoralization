// /api/create-checkout-session.js
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
if (req.method !== 'POST') {
res.setHeader('Allow', 'POST');
return res.status(405).end('Method Not Allowed');
}
try {
// Create a subscription checkout session for your $10/mo price
const session = await stripe.checkout.sessions.create({
mode: 'subscription',
line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }], // e.g. price_1RyGvE...
success_url: `${process.env.SITE_URL}/success.html`,
cancel_url: `${process.env.SITE_URL}/cancel.html`,
allow_promotion_codes: true,
});

return res.status(200).json({ url: session.url });
} catch (err) {
console.error(err);
return res.status(400).json({ error: err.message });
}
};
