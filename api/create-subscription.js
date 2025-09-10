// /api/create-subscription.js
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" });
}

try {
const { email } = req.body || {};
const customer = await stripe.customers.create({ email });

const priceId = process.env.STRIPE_PRICE_ID;

const sub = await stripe.subscriptions.create({
customer: customer.id,
items: [{ price: priceId }],
payment_behavior: "default_incomplete",
expand: ["latest_invoice.payment_intent"],
});

const pi = sub.latest_invoice.payment_intent;

res.status(200).json({
clientSecret: pi.client_secret,
subscriptionId: sub.id,
});
} catch (e) {
console.error("Stripe error:", e);
res.status(400).json({ error: e.message || "Failed to create subscription" });
}
};
