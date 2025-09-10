// /api/create-setup-intent.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
if (req.method !== 'POST') {
res.status(405).json({ error: 'Method not allowed' }); return;
}

try {
const { email } = req.body || {};

// Create a customer (idempotent-ish by email not guaranteed; good enough for simple flow)
const customer = await stripe.customers.create({ email });

// Prepare a SetupIntent to collect & save a card on-site
const setupIntent = await stripe.setupIntents.create({
customer: customer.id,
automatic_payment_methods: { enabled: true }
});

res.status(200).json({
clientSecret: setupIntent.client_secret,
customerId: customer.id
});
} catch (e) {
res.status(400).json({ error: e.message || 'Failed to create setup intent' });
}
};
