// /api/create-subscription.js
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
apiVersion: "2024-06-20",
});

export default async function handler(req, res) {
if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" });
}

try {
const { customerId, paymentMethodId } = req.body;

if (!customerId || !paymentMethodId) {
return res.status(400).json({ error: "Missing customerId or paymentMethodId" });
}

// Attach payment method to customer
await stripe.paymentMethods.attach(paymentMethodId, { customer: customerId });

// Set default payment method for invoices
await stripe.customers.update(customerId, {
invoice_settings: { default_payment_method: paymentMethodId },
});

// Create subscription in "incomplete" mode
const subscription = await stripe.subscriptions.create({
customer: customerId,
items: [{ price: process.env.STRIPE_PRICE_ID }],
payment_behavior: "default_incomplete",
payment_settings: { save_default_payment_method: "on_subscription" },
expand: ["latest_invoice.payment_intent"],
});

const pi = subscription.latest_invoice.payment_intent;

return res.status(200).json({
subscriptionId: subscription.id,
clientSecret: pi.client_secret,
});
} catch (err) {
console.error("create-subscription error:", err);
return res.status(400).json({ error: err.message });
}
}
