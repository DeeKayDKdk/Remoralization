// /api/create-setup-intent.js
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
try {
const { email } = req.body || {};

// Get or create customer
let customer = null;
if (email) {
const found = await stripe.customers.list({ email, limit: 1 });
customer = found.data[0] ?? await stripe.customers.create({ email });
} else {
customer = await stripe.customers.create();
}

// Create SetupIntent to securely collect a reusable card on your page
const setupIntent = await stripe.setupIntents.create({
customer: customer.id,
payment_method_types: ["card"],
});

res.status(200).json({ clientSecret: setupIntent.client_secret, customerId: customer.id });
} catch (e) {
res.status(500).json({ error: e.message });
}
}
