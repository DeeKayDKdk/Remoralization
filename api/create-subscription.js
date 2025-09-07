const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
try {
if (req.method !== 'POST') return res.status(405).end('POST only');

const { email } = await readJson(req);

// Find or create a Stripe customer
const existing = await stripe.customers.list({ email, limit: 1 });
let customer = existing.data[0];
if (!customer) customer = await stripe.customers.create({ email });

// Create subscription in incomplete state and return the PaymentIntent client_secret
const subscription = await stripe.subscriptions.create({
customer: customer.id,
items: [{ price: process.env.STRIPE_PRICE_ID }],
payment_behavior: 'default_incomplete',
expand: ['latest_invoice.payment_intent'],
});

const clientSecret = subscription.latest_invoice.payment_intent.client_secret;
res.status(200).json({ subscriptionId: subscription.id, clientSecret });
} catch (err) {
console.error('create-subscription error:', err);
res.status(400).json({ error: err.message || 'Stripe error' });
}
};

async function readJson(req) {
const chunks = [];
for await (const c of req) chunks.push(c);
const raw = Buffer.concat(chunks).toString('utf8');
return raw ? JSON.parse(raw) : {};
}
