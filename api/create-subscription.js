// Path: /api/create-setup-intent.js
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" });
}
try {
const { email } = req.body || {};
const customer = await stripe.customers.create({ email });
const setupIntent = await stripe.setupIntents.create({
customer: customer.id,
automatic_payment_methods: { enabled: true },
});
res.status(200).json({
clientSecret: setupIntent.client_secret,
customerId: customer.id,
});
} catch (e) {
console.error("SetupIntent error:", e);
res.status(400).json({ error: e.message || "Failed to create setup intent" });
}
};
