// /api/create-setup-intent.js
const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });

module.exports = async function handler(req, res) {
if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" });
}

try {
const { email } = req.body || {};

// Get or create customer
let customer;
if (email) {
const found = await stripe.customers.list({ email, limit: 1 });
customer = found.data[0] || await stripe.customers.create({ email });
} else {
customer = await stripe.customers.create();
}

// Create SetupIntent
const setupIntent = await stripe.setupIntents.create({
customer: customer.id,
payment_method_types: ["card"],
usage: "off_session", // optional, good for subscriptions
});

res.status(200).json({
clientSecret: setupIntent.client_secret,
customerId: customer.id,
});
} catch (err) {
console.error("create-setup-intent error:", err);
res.status(500).json({ error: err.message });
}
};
``
