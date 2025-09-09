// /api/create-setup-intent.js
const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });

module.exports = async function handler(req, res) {
if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

try {
const { email } = req.body || {};
const cleanEmail = typeof email === "string" && email.includes("@") ? email.trim() : undefined;

const found = cleanEmail ? await stripe.customers.list({ email: cleanEmail, limit: 1 }) : { data: [] };
const customer = found.data[0] || await stripe.customers.create(cleanEmail ? { email: cleanEmail } : {});

const setupIntent = await stripe.setupIntents.create({
customer: customer.id,
payment_method_types: ["card"],
usage: "off_session",
});

res.status(200).json({ clientSecret: setupIntent.client_secret, customerId: customer.id });
} catch (e) {
console.error("create-setup-intent error:", e);
res.status(500).json({ error: e.message });
}
};
