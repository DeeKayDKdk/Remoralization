// /api/create-subscription.js
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" });
}

try {
const { customerId, paymentMethodId } = req.body || {};
if (!customerId || !paymentMethodId) {
return res.status(400).json({ error: "Missing customerId or paymentMethodId" });
}

// Attach payment method to customer
await stripe.paymentMethods.attach(paymentMethodId, { customer: customerId });
await stripe.customers.update(customerId, {
invoice_settings: { default_payment_method: paymentMethodId },
});

// Create subscription
const sub = await stripe.subscriptions.create({
customer: customerId,
items: [{ price: process.env.STRIPE_PRICE_ID }],
payment_behavior: "default_incomplete",
expand: ["latest_invoice.payment_intent"],
});

const pi = sub.latest_invoice.payment_intent;

// If 3D Secure is required
if (pi && pi.status === "requires_action") {
return res.status(200).json({ clientSecret: pi.client_secret });
}

// Success
return res.status(200).json({
ok: true,
subscriptionId: sub.id,
});
} catch (e) {
console.error("Subscription error:", e);
res.status(400).json({ error: e.message || "Failed to create subscription" });
}
};
