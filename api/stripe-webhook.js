const Stripe = require('stripe');
const { buffer } = require('micro'); // vercel auto-includes micro

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

const sig = req.headers['stripe-signature'];
let event;

try {
const buf = await buffer(req);
event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
} catch (err) {
console.error('Webhook signature verification failed.', err.message);
return res.status(400).send(`Webhook Error: ${err.message}`);
}

switch (event.type) {
case 'customer.subscription.created':
console.log('Subscription created:', event.data.object.id);
break;
case 'customer.subscription.updated':
console.log('Subscription updated:', event.data.object.id);
break;
case 'customer.subscription.deleted':
console.log('Subscription canceled:', event.data.object.id);
break;
case 'invoice.payment_succeeded':
console.log('Payment succeeded for invoice:', event.data.object.id);
break;
case 'invoice.payment_failed':
console.log('Payment failed for invoice:', event.data.object.id);
break;
default:
console.log(`Unhandled event type ${event.type}`);
}

res.json({ received: true });
};

module.exports.config = {
api: {
bodyParser: false, // Required by Stripe webhook verification
},
};
