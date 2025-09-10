// /api/create-subscription.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
if (req.method !== 'POST') {
res.status(405).json({ error: 'Method not allowed' }); return;
}

try {
const { customerId, paymentMethodId } = req.body || {};
if (!customerId || !paymentMethodId) {
return res.status(400).json({ error: 'Missing customerId or paymentMethodId' });
}

// Attach PM to customer + make default for invoices
await stripe.paymentMethods.attach(paymentMethodId, { customer: customerId });
await stripe.customers.update(customerId, { invoice_settings: { default_payment_method: paymentMethodId } });

// Create subscription in "incomplete" so we can handle 3DS if needed
const sub = await stripe.subscriptions.create({
customer: customerId,
items: [{ price: process.env.STRIPE_PRICE_ID_PLATINUM }],
payment_behavior: 'default_incomplete',
expand: ['latest_invoice.payment_intent']
});

const pi = sub.latest_invoice?.payment_intent;

// If 3DS is required, return the PI client_secret to confirm on the client
if (pi && pi.status === 'requires_action') {
return res.status(200).json({ clientSecret: pi.client_secret });
}

// Otherwise we’re good
res.status(200).json({ ok: true, subscriptionId: sub.id });
} catch (e) {
res.status(400).json({ error: e.message || 'Subscription creation failed' });
}
};
